// import React from 'react';

const Blog = () => {
    return (
        <div className="rounded-lg p-4">
            <div className='bg-cyan-200  rounded p-1 shadow-lg mt-4'>
                <h1 className='text-center text-3xl text-red-600 font-bold m-4 fw-bold'>Blog</h1>
            </div>
            <div className='bg-success bg-gradient p-4 rounded-lg p-8 mb-4 mt-5
              border-2 rounded'>
                <span className='text-2xl text-red-700 font-bold'>Question 1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</span>
                <p>
                    <span className='text-2xl text-red-700 font-bold'>Answer: </span>
                    After successful authentication, a user is given an access token as a credential. It is a transient token with a normal expiration date. Information about the user and their permissions is contained in the access token. The client sends the access token along with each request to the server when gaining access to protected resources. Depending on the user's authorisation level, the server checks the token's validity before granting or denying access to the resources that have been requested. <br /> A refresh token, on the other hand, is a credential with a long lifespan. It is securely saved on the client-side during authentication and is issued concurrently with the access token. When the current access token expires or becomes invalid, the refresh token is used to get a new one. The client sends the refresh token to the server to ask for a new access token rather than forcing the user to log in again. Without requesting the user's credentials, the server verifies the refresh token and, if it is genuine, generates a new access token. <br /> Prioritizing security is essential when keeping access tokens and refresh tokens on the client-side. To prevent unwanted access, access tokens and refresh tokens must be stored securely. The tokens can be kept in HTTP-only secure cookies, which is a popular strategy. The browser automatically adds these cookies to every request, improving security by thwarting cross-site scripting attacks. The tokens can also be kept in encrypted local storage as an alternative. It's crucial to remember that JavaScript can access local storage, thus each request must manually include the tokens. The individual needs and security considerations of your application will determine whether to use cookies or local storage.
                    <br />
                </p>
            </div>
            <div className='bg-success bg-gradient p-4 rounded-lg mb-4 p-8
              border-2 '>
                <span className='text-2xl text-red-700 font-bold'>Question 2: Compare SQL and NoSQL databases.</span>
                <p>
                    <span className='text-2xl text-red-700 font-bold'>Answer: </span>
                    Data storage and retrieval are handled differently by SQL (Structured Query Language) and NoSQL (Not Only SQL), two major types of database management systems. Here is an evaluation of the two: <br />
                    <b>Data Model: </b><br />
                    SQL: SQL databases use a structured data model with tables that have fixed schemas, where data is organized in rows and columns. Relationships between tables are established using foreign keys.
                    NoSQL: NoSQL databases can use key-value, document, columnar, and graph data models. These models enable for flexibility, allowing for more dynamic and schema-free data storage. <br />
                    <b>Scalability:</b> <br />

                    SQL: SQL databases generally scale vertically, meaning they handle increased load by upgrading hardware resources (CPU, memory, etc.). They have limitations on scaling horizontally across multiple servers.
                    NoSQL: NoSQL databases are designed to scale horizontally by distributing data across multiple servers. They can handle large amounts of data and high traffic by adding more servers to the cluster.<br />
                    <b>Schema:</b><br />

                    SQL: SQL databases have a predefined schema, which defines the structure of the data. The schema enforces data integrity and ensures consistent data representation.
                    NoSQL: NoSQL databases are typically schema-less or have a flexible schema. They allow for dynamic and evolving data structures, making it easier to handle unstructured or semi-structured data.<br />
                    <b>Query Language:</b><br />

                    SQL: SQL databases use the SQL language for querying and manipulating data. SQL provides a standardized way to interact with databases, making it easier to perform complex queries, joins, aggregations, and transactions.
                    NoSQL: NoSQL databases often have their own query languages, which are specific to the data model they use. For example, key-value stores may use simple get and set operations, while document databases may use JSON-like query languages.<br />
                    <b>Data Consistency:</b><br />

                    SQL: SQL databases typically provide strong data consistency, ensuring that data remains in a consistent state even during concurrent operations. ACID (Atomicity, Consistency, Isolation, Durability) properties are often supported.
                    NoSQL: NoSQL databases often prioritize availability and partition tolerance over strict consistency. They may offer eventual consistency, where data consistency is achieved over time, or provide tunable consistency models depending on the use case.<br />
                </p>
            </div>
            <div className='bg-success bg-gradient p-4 rounded-lg mb-4 p-8
              border-2 '>
                <span className='text-2xl text-red-700 font-bold'>Question 3: What is express js? What is Nest JS?</span>
                <p>
                    <span className='text-2xl text-red-700 font-bold'>Answer: </span>
                    A well-liked web application framework for Node.js is called Express.js. It offers a straightforward and understated method for creating web applications and APIs. Express.js is renowned for its adaptability and scalability, enabling programmers to design server-side JavaScript applications. It offers a collection of middleware and features that simplify routing, request processing, and response management. <br />
                    An easy-to-use API is provided by Express.js for managing HTTP requests and specifying routes. It enables you to handle various HTTP request types (GET, POST, PUT, DELETE, etc.) on particular routes and carry out the necessary logic. Additionally, Express.js has middleware capability, allowing you to extend the functionality or processing of your routes. Request processing, authentication, logging, error handling, and other activities are some of the things that middleware functions can do.
                    <br /> <br /> Contrarily, NestJS is a forward-thinking Node.js framework for creating scalable and effective server-side applications. It incorporates ideas like dependency injection, decorators, and modules and is highly influenced by Angular. NestJS is made to offer a strong foundation for creating scalable, maintainable, and testable server-side applications.
                    <br />
                    The primary language of NestJS is TypeScript, which extends JavaScript with static typing and other cutting-edge features. In order to define modules, controllers, services, and other components, it makes use of decorators and metadata. The usage of modular architecture is encouraged by NestJS, which makes it simpler to organize and reuse code.



                </p>
            </div>
            <div className='bg-success bg-gradient rounded-lg mb-4 p-8
              border-2 '>
                <span className='text-2xl text-red-700 font-bold'>Question 4: What is MongoDB aggregate and how does it work?</span>
                <p>
                    <span className='text-2xl text-red-700 font-bold'>Answer: </span>
                    The aggregation framework in MongoDB is a potent tool that lets you carry out complex data processing operations on MongoDB collections. Instead of accessing and processing the data at the application layer, it offers a mechanism to carry out extensive data transformations, filtering, grouping, sorting, and analysis within the database. <br /> The MongoDB aggregation architecture is pipeline-based, allowing you to create a chain of stages through which the data flows, each of which further transforms the data. Each step in the pipeline accepts the input documents and generates output documents that are sent to the stage after it. <br /> The pipeline stages in MongoDBs aggregation framework are built using a set of operators. Here are some of the commonly used stages: $match, $group, $project, $sort, $limit, $skip, $unwind etc.

                </p>
            </div>
        </div>
    );
};

export default Blog;