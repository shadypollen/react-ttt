import React from "react";
import ReactDOM from "react-dom";

function Comment(props) {
	console.log(props);
	return(
		<div className="Comment">
			<div className="UserInfo">
				<Avatar author={props.author} />
				<UserName author={props.author} />
			</div>
			<CommentText text = {props.text} />
			<CommentDate date = {props.date} />
		</div>
	);
}

function Avatar(props) {
	return <a className="Avatar" href={props.author.avatarUrl}>
			{props.author.avatarUrl}
			</a>
};

function UserName(props) {
	return <div className="UserInfo-name"> {props.author.name} </div>
};

function CommentText(props) {
	return <div className="Comment-text"> {props.text} </div>
};

function CommentDate(props) {
	return <div className="Comment-date"> {props.date} </div>
};

let author = {name : "Aleks",
			  avatarUrl : "lalkapalka.com"
			 };

let text = "lolololol";
let date = new Date().toLocaleTimeString();	

ReactDOM.render(<Comment author={author} text={text} date={date} />, document.getElementById("root"));

