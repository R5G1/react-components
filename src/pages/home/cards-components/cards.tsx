import React from 'react';

function formatDate(date: { toLocaleDateString: () => any }) {
  return date.toLocaleDateString();
}

function Avatar(props: { user: { avatarUrl: string; name: string } }) {
  return <img className="comment-vatar" src={props.user.avatarUrl} alt={props.user.name} />;
}

function UserInfo(props: any) {
  return (
    <div className="user-info">
      <Avatar user={props.user} />
      <div className="user-info-name">{props.user.name}</div>
      <a className="user-info-name" href={props.user.avatarUrl}>
        link
      </a>
    </div>
  );
}

function getRandomArbitrary(min = 70, max = 90) {
  return Math.round(Math.random() * (max - min) + min);
}

const comment = {
  date: new Date(),
  text: 'Lorem ipsum dolor',
  author: {
    name: 'Hello Kitty',
    avatarUrl: `http://placekitten.com/g/${getRandomArbitrary()}/${getRandomArbitrary()}`,
  },
};
function Comment(props: any) {
  return (
    <div className="comment">
      <UserInfo user={comment.author} />
      <div className="comment-text">{comment.text}</div>
      <div className="comment-date">{formatDate(comment.date)}</div>
    </div>
  );
}

export default class Cards extends React.Component {
  numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30,
  ];

  NumberList(props: { numbers: any }) {
    const numbers = props.numbers;
    const listItems = numbers.map((number: number) => (
      <div className="column__content-stylys" key={number.toString()}>
        {number}
        <div className="comment">
          <UserInfo user={comment.author} />
          <div className="comment-text">{comment.text}</div>
          <div className="comment-date">{formatDate(comment.date)}</div>
        </div>
      </div>
    ));
    return <div className="column__content">{listItems}</div>;
  }

  render() {
    return (
      <div>
        <div className="cards__column">
          <this.NumberList numbers={this.numbers} />
        </div>
      </div>
    );
  }
}
