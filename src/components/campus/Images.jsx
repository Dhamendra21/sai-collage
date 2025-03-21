import { image } from "framer-motion/client";

const Images = () => {
    const images = [
     {heading:"campus",  image:"/public/collage pics/campus.jpg"},
      {heading:"Green Campus", image:"/public/collage pics/green2.jpg",},
     { heading:"Corridor", image:"/public/collage pics/coridoor.jpg",},
      {heading:"library", image:"/public/collage pics/library.jpg",},
     { heading:"Entry Gate", image: "/public/collage pics/gate.jpg",},
      { heading:"Modern classrooms", image:"/public/collage pics/classroom.jpg",},
      { heading:"Computer Labs", image:"/public/collage pics/computer.jpg",},
      {heading:"Botany Lab", image:"/public/collage pics/botny.jpg",},
      {heading:"Zoology Lab", image:"/public/collage pics/zoology.jpg",},
      {heading:"Chemistry Lab", image:"/public/collage pics/chemestry.jpg"},
      {heading:"CS Department", image:"/public/collage pics/csDepart.jpg", }
      
    ];
  
    return (
      <div className="columns-3 max-sm:columns-2 gap-4 mt-6 max-sm:p-0 p-5 md:columns-4">
        {images.map((items, i) => (
          <div key={i} className="break-inside-avoid mb-4">
            <img src={items.image} alt="Masonry Image" className="w-full rounded-lg" />
            <h4 className="pt-2 text-sm font-regular capitalize">{items.heading}</h4>
          </div>
        ))}
      </div>
    );
  };
  
  export default Images;
  