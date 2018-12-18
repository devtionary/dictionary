import React, {Component} from 'react';
import TopNav from "../components/TopNav";
import PageContent from '../components/PageContent';
import NoticeMessage from '../components/NoticeMessage';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <TopNav />
        {/*{this.state.notice &&*/}
        {/*<NoticeMessage noticeMessage={this.state.noticeMessage} />*/}
        {/*}*/}
        {/*<PageContent*/}
        {/*closeSignUpModal={this.closeSignUpModal}*/}
        {/*signUp={this.state.signUp}*/}
        {/*signedIn={this.state.signedIn}*/}
        {/*user={this.state.user}*/}
        {/*/>*/}
      </main>
    )
  }
}

export default Home;
