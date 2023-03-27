document.title = "Blog Home";
let container = document.getElementById("container");

const getBlogs = async () => {
  const response = await fetch("http://localhost:8000/api/blogs");
  const blogs = await response.json();

  let html = "";

  blogs.forEach((blog) => {
    html += `
        <div class="blogs">
            <h1>${blog.title}</h1>
            <p style="margin: 20px 0px">${blog.body.slice(0, 300)}</p>
            <a href=details.html?id=${blog._id} >read more...</a>
        </div>
    `;
  });

  container.innerHTML = html;
};

getBlogs();

let form = document.getElementById("form");
const searchInput = document.getElementById("searchInput");
const items = container.getElementsByTagName("div");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchInput.addEventListener("keyup", (e) => {
    const query = e.target.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.innerHTML.toLowerCase().indexOf(query) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    }
  });
});
