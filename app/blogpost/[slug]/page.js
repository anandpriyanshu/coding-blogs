const blog = {
    author: "John Doe",
    description: "This is a sample blog post.",
    date: "2023-10-01",
    content: "<p>This is the HTML content of the blog post.</p>"
};

export default async function Page({ params }) {
    return (
        <>
            <div className="max-w-5xl mx-auto p-4 border rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
                <p className="text-gray-600 mb-2"><b>By {blog.author} on {blog.date}</b></p>
                <p className="text-gray-800 mb-4">{blog.description}</p>
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
        </>
    );
}