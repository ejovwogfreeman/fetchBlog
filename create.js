document.title = "Create Blog";

const postBlog = async (blog) => {
  await fetch("http://localhost:8000/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
};

const form = document.getElementById("form");
const title = document.getElementById("title");
const body = document.getElementById("body");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  postBlog({ title: title.value, body: body.value });
  window.location.replace("index.html");
});
