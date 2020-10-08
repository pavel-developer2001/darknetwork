const express = require('express')
const cors = require("cors")
const sequelize = require('./db')
const bodyParser = require('body-parser');
const path = require('path')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Post = require('./models/post.js')
const User = require('./models/user.js')
const Comment = require('./models/comment')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(express.json())


app.get('/api/user/:id/posts', async (req,res) => {
    try{
        const {id} = req.params
        const posts = await Post.findAll({ where:{ userId: id }})

        // const comments = await Comment.findAll()
        res.status(200).json({
            status: 'success',
            data: {posts}})
    }catch (e){
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})
app.get('/api/user/:id/comments', async (req,res) => {
    try{
        console.log(req.body)
        const {id} = req.params
        const comments = await Comment.findAll({ where:{ userId: id, postId: req.body.postId }})
        console.log(posts)
        // const comments = await Comment.findAll()
        res.status(200).json({
            status: 'success',
            data: {comments}})
    }catch (e){
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})
app.get('/api/user/:id', async (req,res) => {
    try{
        const {id} = req.params
        const user = await User.findOne({
            where: {
                id: id
            }
        })
        res.status(200).json({
            status: 'succes',
            data: {user}
        })
    }
    catch(err){
        console.log(err)
    }
})
app.post('/api/user/:id/addpost', async (req,res) => {

    try{
        const {id} = req.params
        const user = await User.findOne({
            where: {
                id: id
            }
        })
        const post = await Post.create({
            postAuthor: user.name,
            postText: req.body.postText,
            countLike: 0,
            countComments: 0,
            userId: user.id
        })
        if (post){
            console.log('success')
        }
        res.status(200).json({
            status:'success',
            data: {post}
        })
    }catch(err){
        console.log(err)
    }
})
app.post('/api/user/:id/addcomment', async (req,res) => {
    console.log(req.body)
    try{
        const {id} = req.params
        const user = await User.findOne({
            where: {
                id: id
            }
        })
        console.log(user)
        // const post = await Post.findOne({
        //     where: {
        //         userId: id
        //     }
        // })
        const comment = await Comment.create({
            commentAuthor: user.name,
            commentText: req.body.commentText,
            commentCountLike: 0,
            postId: req.body.postId,
            countComment: 0,
            userId: user.id
        })
        if (comment){
            console.log('success')
        }
        res.status(200).json({
            status:'success',
            data: {comment}
        })
    }catch(err){
        console.log(err)
    }
})
const jwtSecret = 'developer darnetwork'
app.post('/api/register',
[check('name', 'Введите имя').exists(),
 check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 }),
 check('password2', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
  ] ,
async (req,res) => {
    try{
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
            message: 'Некорректный данные при регистрации'
        })
        }

        const {name, password, password2} = req.body

        if (password != password2){
            return res.status(400).json({
                message: 'Пароли не совпадают.Попробуйте ещё раз'
            })
        }
        
        const candidate = await User.findOne({
            where: {
                name: name
            }
        })
      
        if (candidate) {
            return res.status(400).json({ message: 'Пользователь с таким именем уже существует. Введите другое имя' })
          }
          const hashedPassword = await bcrypt.hash(password, 12)
          const user = new User({ name, password: hashedPassword })
      
          await user.save()
      
          res.status(201).json({
              status:'succes',
              message: 'Пользователь создан',
              data: user })
    }
    catch(err){
        console.log(err)
    }
})

app.post('/api/login',
         [check('name', 'Введите имя').exists(),
          check('password', 'Введите пароль').exists()],
          async (req, res) => {
          try{
                console.log(req.body)
                const errors = validationResult(req)

                if (!errors.isEmpty()) {
                  return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректный данные при входе в систему'
                  })
                }
                const {name, password} = req.body
                console.log(name)
                const user = await User.findOne({
                    where: {
                        name: name
                    }
                })
                
                if (!user) {
                    return res.status(400).json({ message: 'Пользователь не найден' })
                  }

        
                const isMatch = await bcrypt.compare(password, user.password)
                console.log('AAAAAAAAAA',isMatch)
                if (!isMatch) {
                return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
                }  
                const token = jwt.sign(
                    { userId: user.id },
                    jwtSecret,
                    { expiresIn: '30d' }
                  )
              
                res.json({ 
                    token, 
                    userId: user.id,
                    data: user })
              }
              catch(err){
                  console.log(err)
                }
          })
const PORT = process.env.PORT || 3001
const start = async () => {
    try{
        await sequelize.sync()
        app.listen(PORT, ()=>{
            console.log(`Server start on port ${PORT}`)
        })
    }catch(err){
        console.log(err)
    }
}
start()

