document.title = "Blog Detail";
const postContainer = document.getElementById("post-container");

let id = window.location.href.split("=")[1];
console.log(id);

const getBlog = async () => {
  const response = await fetch(`http://localhost:8000/api/blogs/${id}`);
  const blog = await response.json();
  console.log(blog);

  let html = `
    <div class="blogs" style="padding: 0px">
        <h1>${blog.title}</h1>
        <p style="margin: 20px 0px">${blog.body}</p>
        <a href=update.html?id=${blog._id}>EDIT</a>
    </div>
  `;

  postContainer.innerHTML = html;
};

getBlog();

const deleteBlog = async () => {
  await fetch(`http://localhost:8000/api/blogs/${id}`, {
    method: "DELETE",
  });
  window.location.replace("index.html");
};

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  deleteBlog();
});
