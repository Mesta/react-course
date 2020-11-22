import ApprovalCard from './ApprovalCard'
import CommentDetail from './CommentDetail'
import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

const App = () => {
  return (
    <div>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
        </div>
        Are you sure you want to do this?
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          text={faker.lorem.sentence()}
          timeAgo={faker.date.past().toLocaleTimeString()}/>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          text={faker.lorem.sentence()}
          timeAgo={faker.date.past().toLocaleTimeString()}/>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          text={faker.lorem.sentence()}
          timeAgo={faker.date.past().toLocaleTimeString()}/>
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))

export default App
