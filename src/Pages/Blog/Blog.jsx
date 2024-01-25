import { useState } from "react";
import { Helmet } from "react-helmet";
import { GoDotFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import img1 from '../../assets/111.jpg'
import img3 from '../../assets/112.jpg'
import img2 from '../../assets/113.jpg'
import img4 from '../../assets/117.jpg'
import img5 from '../../assets/118.webp'
import img6 from '../../assets/b5.jpg'
import img7 from '../../assets/fav1.webp'
import img8 from '../../assets/fav2.jpg'
import img9 from '../../assets/feat/feat4.jpg'

const Blog = () => {
    const [expandedBlogs, setExpandedBlogs] = useState([]);

    const toggleReadMore = (blogId) => {
        setExpandedBlogs((prevExpanded) => {
            if (prevExpanded.includes(blogId)) {
                return prevExpanded.filter((id) => id !== blogId);
            } else {
                return [...prevExpanded, blogId];
            }
        });
    }
    const blogs = [
        {
            "id": 1,
            "title": "Choosing the Right Toys for Different Developmental Stages",
            "image": "https://i.ibb.co/n8Xnr2m/113.jpg",
            "date": "2023-09-01",
            "description": "In the vibrant world of toys, finding the perfect playthings for your child can be both exciting and challenging. Each developmental stage comes with unique milestones, and selecting toys that align with these stages is crucial for fostering holistic growth. This guide aims to help parents navigate the diverse toy market, offering insights into selecting age-appropriate toys that stimulate cognitive, physical, and emotional development.\n\n  Overview\n\n Infancy (0-12 months):\nDuring the first year, infants explore the world through their senses. Opt for high-contrast toys, soft textures, and those that make gentle sounds. Rattles, soft plush toys, and mobiles with bold patterns can engage their developing vision and auditory senses.\n\n Toddlers (1-3 years):\nToddlers are eager to explore and refine their motor skills. Choose toys that encourage physical activity and coordination, such as building blocks, stacking toys, and ride-on vehicles. Simple puzzles and shape sorters promote problem-solving skills.\n\n Preschoolers (3-5 years):\nImaginative play takes center stage during the preschool years. Introduce dolls, action figures, and pretend play sets. Arts and crafts materials enhance creativity, while educational games and books lay the foundation for early literacy and numeracy skills.\n\n Early School Years (6-8 years):\nAs children enter formal education, educational toys that align with their school curriculum can be beneficial. Board games, science kits, and construction sets foster critical thinking and teamwork. Sports equipment encourages physical activity and socialization.\n\n Pre-Adolescence (9-12 years):\nPre-adolescents crave challenges and intellectual stimulation. Consider strategy games, advanced construction sets, and age-appropriate technology toys. Creative kits like music instruments or art supplies support self-expression.\n\nChoosing the right toys for different developmental stages is a thoughtful investment in your child's growth. By understanding their evolving needs and interests, parents can create an enriching play environment that contributes to cognitive, emotional, and physical development. Always prioritize safety, quality, and educational value when selecting toys for your child."
        },        
        {
            "id": 2,
            "title": "How Interactive and Tech Toys Enhance Learning in the Digital Age",
            "image": "https://i.ibb.co/J2pd6d1/1br9qfyl8776ubo16eo.jpg",
            "date": "2023-02-15",
            "description": "In today's digital era, the landscape of childhood education is evolving rapidly, and interactive and tech toys are at the forefront of this revolution. Gone are the days when toys were mere sources of entertainment; now, they serve as powerful tools for enhancing learning experiences. This blog explores the ways in which interactive and tech toys contribute to the educational journey of children in the digital age. Engaging Learning Experiences Interactive and tech toys have redefined the concept of learning by turning traditional subjects into captivating adventures. Whether it's mathematics, science, language, or critical thinking, these toys engage children in interactive activities that make learning enjoyable. Through games, puzzles, and challenges, kids can absorb educational content in a way that feels like play, fostering a positive attitude towards learning. Promoting Cognitive Development Tech toys often incorporate elements that stimulate various aspects of cognitive development. From problem-solving challenges to memory exercises, these toys encourage kids to think critically and develop essential cognitive skills. Interactive features, such as responsive touchscreens, voice recognition, and sensory feedback, provide a multi-sensory learning experience that enhances memory retention and cognitive processing. Encouraging Creativity and Imagination  Interactive toys are not only about structured learning; they also play a crucial role in nurturing creativity and imagination. Tech toys often feature open-ended scenarios that allow children to explore and create in a digital environment. Whether it's designing virtual worlds, creating digital art, or composing music, these toys empower kids to express themselves and think outside the box.   Personalized Learning Journeys One of the remarkable advantages of tech toys is their ability to adapt to the individual learning needs of each child. Many interactive devices and apps are designed with adaptive learning algorithms that customize content based on a child's progress. This personalized approach ensures that children receive challenges and activities that are tailored to their skill levels, promoting a more effective and efficient learning journey.Preparing for the Future As we move further into the digital age, technological literacy is becoming an essential skill. Interactive and tech toys provide an early introduction to technology, preparing children for a future where digital proficiency is a fundamental requirement. Exposure to coding games, robotics, and augmented reality not only makes learning enjoyable but also equips kids with skills that are increasingly valuable in today's tech-driven society.Social Learning and Collaboration Interactive toys often come with features that encourage social interaction and collaboration. Whether through multiplayer games, online platforms, or collaborative projects, these toys promote teamwork and communication skills. As children engage with others, they not only learn from the digital content but also develop essential social skills that are crucial for their overall growth and development. Parental Involvement and Monitoring Tech toys also facilitate increased parental involvement in a child's learning journey. Many interactive devices come with parent-friendly apps that allow guardians to track their child's progress, set learning goals, and monitor the content being accessed. This involvement creates a bridge between digital and real-world learning, fostering a supportive environment for a child's educational development. In conclusion, interactive and tech toys have emerged as powerful allies in the quest for effective and enjoyable learning experiences. By combining education with entertainment, these toys not only capture children's attention but also provide a platform for holistic development. As we embrace the digital age, the integration of interactive and tech toys into educational practices opens up new possibilities for a generation of learners who are well-equipped to navigate the challenges of the future.",
        },
        {
            "id": 3,
            "title": "Navigating the World of Eco-Friendly Toys: Sustainable Play for a Brighter Future",
            "image": "https://i.ibb.co/ysPT4DB/Untitled-design-85-0x0-1200x.jpg",
            "date": "2023-03-20",
            "description": "In a world where environmental consciousness is more critical than ever, the choices we make, even in selecting toys for our children, can have a lasting impact on the planet. Embracing the concept of sustainable play not only fosters a sense of responsibility but also contributes to a brighter and greener future for the generations to come. Let's explore the wonderful world of eco-friendly toys and how they can play a pivotal role in nurturing both the imagination of our little ones and the health of our planet.The Rise of Eco-Friendly Toys  Traditional toys often involve the use of plastic materials and non-recyclable components, contributing to the ever-growing issue of plastic pollution. Fortunately, a wave of eco-consciousness has swept through the toy industry, giving rise to a diverse range of sustainable and eco-friendly alternatives. These toys are crafted from renewable resources, recycled materials, or designed with the intention of minimizing their environmental footprint. Benefits of Eco-Friendly Toys 1. Environmental Impact:  Eco-friendly toys are typically made from biodegradable materials, reducing their impact on landfills. By choosing toys made from sustainable sources, we can significantly decrease the demand for non-renewable resources and mitigate the environmental harm caused by conventional toy manufacturing. 2. Health and Safety:  Many conventional toys contain harmful chemicals that can pose risks to children's health. Eco-friendly toys, on the other hand, are often free from toxic substances, making them a safer choice for our little ones who are prone to exploring the world through touch and taste.3. Educational Value: Sustainable play extends beyond the material used in the toys. Many eco-friendly toys are designed to inspire creativity, critical thinking, and an appreciation for nature. They often reflect themes of environmental conservation, teaching children about the importance of protecting our planet.Exploring the Eco-Friendly Toy Market  1. Wooden Toys: Wooden toys have been a timeless classic, and they continue to gain popularity for their durability and natural appeal. These toys are often crafted from responsibly sourced wood, providing a tactile and sensory-rich play experience. 2. Recycled Plastic Toys: Some innovative companies are taking a circular approach by creating toys from recycled plastics. By repurposing materials that would otherwise end up in landfills, these toys give new life to discarded items.3. Organic Fabric Toys: Soft toys made from organic fabrics offer a cozy and comforting play experience. These toys are often produced using environmentally friendly farming practices, avoiding the use of synthetic pesticides and fertilizers. Tips for Choosing Eco-Friendly Toys  Check Materials: Look for toys made from sustainable materials such as FSC-certified wood, recycled plastic, or organic fabrics. Avoid toys with excessive packaging.       Research Brands:           Choose reputable brands committed to eco-friendly practices. Many companies are now transparent about their manufacturing processes and materials.            Durability Matters:            Eco-friendly toys are often built to last. Choosing durable toys ensures they can be passed down to siblings or friends, reducing overall waste.            Engage in DIY Play:            Get creative and explore the world of do-it-yourself toys. Upcycling materials at home can be a fun and sustainable way to create unique playthings.         Conclusion: Playing Responsibly for a Greener Tomorrow            As parents, caregivers, and conscious consumers, we hold the power to shape a more sustainable future through the choices we make for our children. Navigating the world of eco-friendly toys is not just about providing wholesome play experiences; it's a commitment to nurturing a sense of environmental stewardship in the next generation. By embracing sustainable play, we can contribute to a brighter and greener tomorrow, where every joyous moment is in harmony with the well-being of our planet.",
        },
        {
            "id": 4,
            "title": "Toy Safety 101: A Guide for Parents to Ensure Healthy Playtime",
            "image": "https://i.ibb.co/1LPTnyr/olicarol-cover-e-2147483647-v-beta-t-Gsy9-GUGg-Ewh5-NU80-Z1q-FF8y7-Nhw3rjja-QIYFS0wdk-DE.jpg",
            "date": "2023-04-10",
            "description": "In the dynamic world of childhood development, playtime serves as a crucial avenue for learning and growth. As parents, choosing the right toys for your children is not only about fun and entertainment but also about ensuring their safety and well-being. Toy safety is paramount, and this guide aims to provide parents with essential insights and tips to guarantee a secure and healthy play environment for their little ones.  The Importance of Toy Safety Toys play a pivotal role in shaping a child's physical, cognitive, and emotional development. However, unsafe toys can pose serious risks, from choking hazards to toxic materials. Understanding the significance of toy safety is the first step towards creating a secure play environment.Key Considerations When Selecting Toys    1. Age-Appropriate Choices            Always choose toys that are suitable for your child's age and developmental stage. Manufacturers often provide age recommendations on packaging to guide parents in making informed decisions. These guidelines consider safety features and the complexity of the toy in relation to a child's abilities.        2. Check for Small Parts           Small parts pose a significant choking hazard for young children. Before purchasing a toy, inspect it for small components that could be easily detached. If a toy includes small parts, ensure they are securely attached and appropriate for your child's age.            3. Material Matters            Opt for toys made from non-toxic materials. Be wary of toys containing harmful substances such as lead or phthalates, which can have adverse health effects. Check for safety certifications and read product labels to make informed choices about the materials used in the manufacturing process.          4. Sturdy and Durable Design            Choose toys that are well-made and durable. Avoid toys with sharp edges or easily breakable parts that could cause injuries. Sturdy construction enhances the longevity of the toy and reduces the risk of accidents during play.      5. Follow Safety Guidelines         Always adhere to the safety guidelines provided by the toy manufacturer. These guidelines typically include information on proper usage, maintenance, and cleaning. Following these instructions ensures the optimal safety and longevity of the toy.      Regular Maintenance and Inspections      Ensuring toy safety is an ongoing process that involves regular maintenance and inspections:    1. Check for Wear and Tear     Regularly inspect toys for signs of wear and tear. Replace any damaged or broken toys promptly to prevent potential injuries. Look for frayed wires, loose parts, or any other issues that could compromise the safety of the toy.   2. Keep It Clean       Toys can harbor germs and bacteria, especially those that children frequently put in their mouths. Clean toys regularly according to the manufacturer's instructions. This is particularly important for bath toys, teething toys, and any items that come into direct contact with a child's mouth.  3. Store Properly            Proper storage helps maintain the condition of toys and prevents accidents. Store toys in designated areas, keeping small parts out of reach of younger children. Additionally, be mindful of toy storage in shared spaces to minimize tripping hazards.           Supervision Is Key  No safety measure can replace the importance of parental supervision during playtime. Actively engage with your child, observe their interactions with toys, and intervene if necessary. Supervision is a crucial component of creating a safe play environment for children of all ages.         Conclusion            Ensuring toy safety is an integral part of responsible parenting. By selecting age-appropriate, high-quality toys, conducting regular inspections, and providing active supervision, parents can create an environment that fosters healthy playtime experiences. Remember, a safe play environment contributes not only to your child's well-being but also to their overall development and enjoyment of childhood. Toy safety is a shared responsibility, and with these guidelines, parents can confidently navigate the world of toys for their little ones.",
        }
    ]
    return (
        <div className='md:flex justify-between py-12'>
            <Helmet>
                <title>Blog || Toy Zone</title>
            </Helmet>
            <div className='min-h-screen md:w-[65%] border-1 dark:text-white'>
                {
                    blogs.map(blog => (
                        <div className='space-y-2 '>
                            <img className='h-[500px] w-full pb-2' src={blog.image} alt="" />
                            <div className='px-4'>
                                <div className='flex gap-8 md:text-xl font-semibold'>
                                    <p>{blog.date}</p>
                                    <p className='flex gap-2 join'><GoDotFill className='mt-1' />Admin</p>
                                </div>
                                <p className='font-bold md:text-[34px] text-[24px]'>{blog.title}</p>
                                <p className='text-lg'>
                                    {expandedBlogs.includes(blog.id) ? blog.description : `${blog.description.slice(0, 200)}...`}
                                </p>
                                <button className='md:text-xl text-red-600 font-semibold pb-8' onClick={() => toggleReadMore(blog.id)}>
                                    {expandedBlogs.includes(blog.id) ? '...Read Less' : 'Read More...'}
                                </button>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='min-h-screen md:w-[32%] dark:text-white  space-y-8'>

                <div className="p-8 bg-lime-200    space-y-2">
                    <p className='text-xl md:text-2xl py-2  font-bold'>Search</p>
                    <div className='join flex'>
                        <input className="input join-item rounded-l-xl rounded-r-sm" placeholder="Type Anything..." />
                        <button className="text-[28px] bg-white p-2 join-item rounded-r-xl"><CiSearch className='dark:text-black' /></button>
                    </div>
                </div>

                <div className="p-8 bg-violet-200 space-y-2">
                    <p className='text-xl md:text-2xl py-2  font-bold'>Categories</p>
                    <div>
                        <ul className='text-lg font-semibold text-slate-7ss00'>
                            <a>Healthy Toy (01)</a>
                            <li>Toy Guide (07)</li>
                            <li>Eco-friendly Toy (05)</li>
                            <li>Social Media (05)</li>
                            <li>Play Time (09)</li>
                        </ul>
                    </div>
                </div>

                <div className="p-4 bg-teal-100    space-y-2">
                    <p className='text-xl md:text-2xl py-2 font-bold'>Recent Posts</p>
                    <div className='space-y-4 '>
                        {
                            blogs.slice(0, 3).map(blog => (
                                <div className='flex gap-4'>
                                    <img className='w-32 h-28' src={blog.image} alt="" />
                                    <div>
                                        <p className='flex space-x-8 text-slate-700 font-semibold'><span>{blog.date}</span><GoDotFill className='mt-1' />Admin</p>
                                        <p className='text-lg font-bold'>{blog.title}</p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="p-8 bg-amber-100 space-y-2">
                    <p className='text-xl md:text-2xl py-2  font-bold'>Tags</p>
                    <div className='join flex flex-wrap text-center gap-2 text-slate-600'>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Activity</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Plastic</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Wooden</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Clay</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Toy Box</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Health</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Mentality</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Growth</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Socialism</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Motor</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Electrical</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Harmful</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Education</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Gift</p>

                    </div>
                </div>

                <div className="md:p-4 p-2 bg-fuchsia-200    space-y-2">
                    <p className='text-xl md:text-2xl py-2  font-bold'>Gallery</p>
                    <div className='join'>
                        <div className='grid grid-cols-3 gap-2 p-2'>
                            <img className='w-28 h-28' src={img1} alt="" />
                            <img className='w-28 h-28' src={img2} alt="" />
                            <img className='w-28 h-28' src={img3} alt="" />
                            <img className='w-28 h-28' src={img4} alt="" />
                            <img className='w-28 h-28' src={img5} alt="" />
                            <img className='w-28 h-28' src={img6} alt="" />
                            <img className='w-28 h-28' src={img7} alt="" />
                            <img className='w-28 h-28' src={img8} alt="" />
                            <img className='w-28 h-28' src={img9} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;