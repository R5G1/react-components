interface propsComment {
  arrayConst: any;
}

export default function Comment(props: propsComment) {
  const array = props.arrayConst;
  const listItems = array.map((item: any, index: number) => (
    <div className="column__content-stylys" key={index.toString()}>
      <div className="comment">
        <div className="comment-text">
          <img
            className="comment-vatar"
            src={`http://placekitten.com/g/${90}/${90}`}
          />
          <div>{item.date}</div>
          <div>{item.username}</div>
          <div>{item.fullname}</div>
          <div>{item.select}</div>
          <div>{item.radio}</div>
          <div>{item.scales == true ? 'true' : 'no'}</div>
        </div>
      </div>
    </div>
  ));
  return <div className="column__content">{listItems}</div>;
}
