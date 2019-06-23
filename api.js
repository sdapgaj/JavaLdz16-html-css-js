const url = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
    const response = await fetch(url);
    console.log(response);
    if (response.status === 200) {
        response.json().then(logReceivedData);
    }
}

function logReceivedData(posts) {
    console.log(posts);
}

getPosts();
createPost();

async function createPost() {
    const body = {
        userId: 1,
        title: "New post",
        body: "Test"
    };
    const options = {
        method: "POST",
        body: JSON.stringify(body), // JSON.parse()
            headers: {
            "content-type": "application/json"
        }
    };
    const response = await fetch(url, options);
    console.log(response);
    if (response.status === 201) {
        response.json().then(logReceivedData);
    }
}
