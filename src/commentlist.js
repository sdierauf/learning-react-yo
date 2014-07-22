/** @jsx React.DOM */
var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                <Comment author="Stefan Dierauf">fuck script tags</Comment>
                <Comment author="jesus christ">he that believeth in me</Comment>
            </div>
        );
    }
});