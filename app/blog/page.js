import React from 'react';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';

const blogs = [
    {
        title: "Understanding React",
        description: "A deep dive into React and its ecosystem.",
        slug: "understanding-react",
        date: "2023-10-01",
        author: "John Doe",
        image: "/coding.avif"
    },
    {
        title: "JavaScript Best Practices",
        description: "Learn the best practices for writing clean JavaScript.",
        slug: "javascript-best-practices",
        date: "2023-09-15",
        author: "Jane Smith",
        image: "/coding.avif"
    }, {
        title: "JavaScript Best Practices",
        description: "Learn the best practices for writing clean JavaScript.",
        slug: "javascript-best-practices",
        date: "2023-09-15",
        author: "Jane Smith",
        image: "/coding.avif"
    }

];

function Blog() {
    return (
        <div className="max-w-6xl mx-auto p-12">
            <h1 className="text-3xl font-bold mb-6 text-center">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map((blog) => (
                    <div key={blog.slug} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto">
                        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{blog.title}</h2>
                            <p className="text-gray-600">{blog.description}</p>
                            <p className="text-gray-500 text-sm">{new Date(blog.date).toLocaleDateString()} by {blog.author}</p>

                            <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>Click here</Link>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;