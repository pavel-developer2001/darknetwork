import React from 'react'
import '../index.css'
import CommentList from './CommentList'
import AddComment from './AddComment'


const PostListItem = ({text, name, like, commentCount, userId,postId}) => {
   
   
   
    return (
        <div className='post-list-item'> 
           {text  && <div className='post-info'>
                    <div className='post-list-item-user'>
                    <img className='user-icon' alt='icon' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTMgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzIDUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTdFQ0VEOyIgZD0iTTE4LjYxMyw0MS41NTJsLTcuOTA3LDQuMzEzYy0wLjQ2NCwwLjI1My0wLjg4MSwwLjU2NC0xLjI2OSwwLjkwM0MxNC4wNDcsNTAuNjU1LDE5Ljk5OCw1MywyNi41LDUzDQoJYzYuNDU0LDAsMTIuMzY3LTIuMzEsMTYuOTY0LTYuMTQ0Yy0wLjQyNC0wLjM1OC0wLjg4NC0wLjY4LTEuMzk0LTAuOTM0bC04LjQ2Ny00LjIzM2MtMS4wOTQtMC41NDctMS43ODUtMS42NjUtMS43ODUtMi44ODh2LTMuMzIyDQoJYzAuMjM4LTAuMjcxLDAuNTEtMC42MTksMC44MDEtMS4wM2MxLjE1NC0xLjYzLDIuMDI3LTMuNDIzLDIuNjMyLTUuMzA0YzEuMDg2LTAuMzM1LDEuODg2LTEuMzM4LDEuODg2LTIuNTN2LTMuNTQ2DQoJYzAtMC43OC0wLjM0Ny0xLjQ3Ny0wLjg4Ni0xLjk2NXYtNS4xMjZjMCwwLDEuMDUzLTcuOTc3LTkuNzUtNy45NzdzLTkuNzUsNy45NzctOS43NSw3Ljk3N3Y1LjEyNg0KCWMtMC41NCwwLjQ4OC0wLjg4NiwxLjE4NS0wLjg4NiwxLjk2NXYzLjU0NmMwLDAuOTM0LDAuNDkxLDEuNzU2LDEuMjI2LDIuMjMxYzAuODg2LDMuODU3LDMuMjA2LDYuNjMzLDMuMjA2LDYuNjMzdjMuMjQNCglDMjAuMjk2LDM5Ljg5OSwxOS42NSw0MC45ODYsMTguNjEzLDQxLjU1MnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM1NTYwODA7IiBkPSJNMjYuOTUzLDAuMDA0QzEyLjMyLTAuMjQ2LDAuMjU0LDExLjQxNCwwLjAwNCwyNi4wNDdDLTAuMTM4LDM0LjM0NCwzLjU2LDQxLjgwMSw5LjQ0OCw0Ni43Ng0KCQljMC4zODUtMC4zMzYsMC43OTgtMC42NDQsMS4yNTctMC44OTRsNy45MDctNC4zMTNjMS4wMzctMC41NjYsMS42ODMtMS42NTMsMS42ODMtMi44MzV2LTMuMjRjMCwwLTIuMzIxLTIuNzc2LTMuMjA2LTYuNjMzDQoJCWMtMC43MzQtMC40NzUtMS4yMjYtMS4yOTYtMS4yMjYtMi4yMzF2LTMuNTQ2YzAtMC43OCwwLjM0Ny0xLjQ3NywwLjg4Ni0xLjk2NXYtNS4xMjZjMCwwLTEuMDUzLTcuOTc3LDkuNzUtNy45NzcNCgkJczkuNzUsNy45NzcsOS43NSw3Ljk3N3Y1LjEyNmMwLjU0LDAuNDg4LDAuODg2LDEuMTg1LDAuODg2LDEuOTY1djMuNTQ2YzAsMS4xOTItMC44LDIuMTk1LTEuODg2LDIuNTMNCgkJYy0wLjYwNSwxLjg4MS0xLjQ3OCwzLjY3NC0yLjYzMiw1LjMwNGMtMC4yOTEsMC40MTEtMC41NjMsMC43NTktMC44MDEsMS4wM1YzOC44YzAsMS4yMjMsMC42OTEsMi4zNDIsMS43ODUsMi44ODhsOC40NjcsNC4yMzMNCgkJYzAuNTA4LDAuMjU0LDAuOTY3LDAuNTc1LDEuMzksMC45MzJjNS43MS00Ljc2Miw5LjM5OS0xMS44ODIsOS41MzYtMTkuOUM1My4yNDYsMTIuMzIsNDEuNTg3LDAuMjU0LDI2Ljk1MywwLjAwNHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
                    <h2>{name}</h2>
                    </div>

                    <div className='post-text'>
                        {text}
                        
                    </div>

                    <div className='post-icon'>
                     <button className='like-btn'><img className='post-icon-like'  alt='icon' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTAgNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwIDUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojRDc1QTRBOyIgZD0iTTI0Ljg1LDEwLjEyNmMyLjAxOC00Ljc4Myw2LjYyOC04LjEyNSwxMS45OS04LjEyNWM3LjIyMywwLDEyLjQyNSw2LjE3OSwxMy4wNzksMTMuNTQzDQoJYzAsMCwwLjM1MywxLjgyOC0wLjQyNCw1LjExOWMtMS4wNTgsNC40ODItMy41NDUsOC40NjQtNi44OTgsMTEuNTAzTDI0Ljg1LDQ4TDcuNDAyLDMyLjE2NWMtMy4zNTMtMy4wMzgtNS44NC03LjAyMS02Ljg5OC0xMS41MDMNCgljLTAuNzc3LTMuMjkxLTAuNDI0LTUuMTE5LTAuNDI0LTUuMTE5QzAuNzM0LDguMTc5LDUuOTM2LDIsMTMuMTU5LDJDMTguNTIyLDIsMjIuODMyLDUuMzQzLDI0Ljg1LDEwLjEyNnoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" /></button>
                    
    <strong className='post-icon-like-number'>{like}</strong>
                    <img className='post-icon-comment' alt='icon' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDU4IDU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OCA1ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAzOTFGRDsiIGQ9Ik00OCwxOS45Mjl2MjEuMTQxQzQ4LDQzLjc5Myw0NS43OTMsNDYsNDMuMDcxLDQ2SDIyTDEyLDU3VjQ2SDQuOTI5QzIuMjA3LDQ2LDAsNDMuNzkzLDAsNDEuMDcxDQoJCWwwLTIxLjE0MUMwLDE3LjIwNywyLjIwNywxNSw0LjkyOSwxNWgzOC4xNDFDNDUuNzkzLDE1LDQ4LDE3LjIwNyw0OCwxOS45Mjl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzBGNzFEMzsiIGQ9Ik01My4wNzEsMUgxNC45MjlDMTIuMjA3LDEsMTAsMy4yMDcsMTAsNS45M1YxNWgzMy4wNzFDNDUuNzkzLDE1LDQ4LDE3LjIwNyw0OCwxOS45M1YzMmg1LjA3MQ0KCQlDNTUuNzkzLDMyLDU4LDI5Ljc5Myw1OCwyNy4wN1Y1LjkzQzU4LDMuMjA3LDU1Ljc5MywxLDUzLjA3MSwxeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjUsMjYuMDE1SDExYy0wLjU1MywwLTEtMC40NDgtMS0xczAuNDQ3LTEsMS0xaDE0YzAuNTUzLDAsMSwwLjQ0OCwxLDFTMjUuNTUzLDI2LjAxNSwyNSwyNi4wMTV6Ig0KCQkvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzgsMzIuMDE1SDExYy0wLjU1MywwLTEtMC40NDgtMS0xczAuNDQ3LTEsMS0xaDI3YzAuNTUzLDAsMSwwLjQ0OCwxLDFTMzguNTUzLDMyLjAxNSwzOCwzMi4wMTV6Ig0KCQkvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzgsMzguMDE1SDExYy0wLjU1MywwLTEtMC40NDgtMS0xczAuNDQ3LTEsMS0xaDI3YzAuNTUzLDAsMSwwLjQ0OCwxLDFTMzguNTUzLDM4LjAxNSwzOCwzOC4wMTV6Ig0KCQkvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
                    <strong className='post-icon-like-number'>{commentCount}</strong>
                    </div>
                
            <CommentList userId={userId} postId={postId}/>

              <AddComment userId={userId} postId={postId} userName={name}/>
            </div>}

        </div>
    )
    
}
export default PostListItem