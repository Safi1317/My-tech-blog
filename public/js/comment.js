async function commentFormHandler(event) {
	event.preventDefault();

	const comment_text = document.querySelector('textarea[name="content"]').value;
	const post_id = document.querySelector("input[name='post-id']").value;
	console.log(post_id);

	if (comment_text) {
		await fetch("/api/comment/" + post_id, {
			method: "POST",
			body: JSON.stringify({
				comment_text,
				post_id,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		console.log(comment_text);
		document.location.reload();
	}
}

document.querySelector("#comment-form").addEventListener("submit", commentFormHandler);
