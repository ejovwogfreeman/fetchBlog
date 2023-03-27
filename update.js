document.title = "Create Blog";

let id = window.location.href.split("=")[1];
console.log(id);

const updateBlog = async (blog) => {
  await fetch(`http://localhost:8000/api/blogs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
};
// updateBlog();
const form = document.getElementById("form");
const title = document.getElementById("title");
const body = document.getElementById("body");

form.addEventListener("submit", (e) => {
  console.log("updated");
  console.log(title.value);
  console.log(body.value);
  e.preventDefault();
  updateBlog({ title: title.value, body: body.value });
  window.location.replace("index.html");
});

const getBlog = async () => {
  const response = await fetch(`http://localhost:8000/api/blogs/${id}`);
  const blog = await response.json();
  console.log(blog);
  title.value = blog.title;
  body.value = blog.body;
};

getBlog();
