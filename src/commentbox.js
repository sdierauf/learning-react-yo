/** @jsx React.DOM */
var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello World! I am a CommentBox.
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});
React.renderComponent(
    <CommentBox />,
    document.getElementById('content')
);