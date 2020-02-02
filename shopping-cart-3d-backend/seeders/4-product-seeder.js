'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('products', [
      {
        name: "Fantasy_House",
        price:800,
        description: "Native format model c4d also it has the format max2012, max 2015, FBX, OBJ.\
        - Model not intended for subdivision.\
        - Interior + exterior included (most details modeled )\
        - Geometry is polygonal quad/tris.\
        - All parts correctly named (grouped in .MAX,FBX, OBJ .C4D format).\
        - The model has a different topology and realistic textures. The model is perfect for you for a variety of purposes.",
        image: "/image/product/fantasy.jpg",
        published_date: '2008-11-11',
        polygons_type: "Polygon Mesh",
        polygons_count: 24612,
        vertices_count: 29392,
        texture:1,
        material:1,
        rigged:0,
        animated:0,
        uv_mapped:1,
        unwrapped:1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:1,
        sub_category_id:1,
        user_id: 2,
      },
      {
        name: "Mushroom_House",
        price:950,
        description: "A stylised house study that was done for a school assignment.\
        Its supposed to be mystical and overgrown with mushrooms. The assignment\
         was a test to do it in 18 hours, over the span of 2 days.",
        image: "/image/product/mushroom.jpg",
        published_date: '2008-11-11',
        polygons_type: "Polygon Mesh",
        polygons_count: 165703,
        vertices_count: 21045,
        texture:1,
        material:1,
        rigged:0,
        animated:0,
        uv_mapped:1,
        unwrapped:0,
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:1,
        sub_category_id:1,
        user_id: 1,
      },
      {
        name: "Anthro_Tiger",
        price:1700,
        description: "Tiger Anthro rig\
        IK/FK arms\
        Dynamic/FK tail\
        breathing Control\
        layered controls",
        image: "/image/product/Anthro_Tiger.jpg",
        published_date:'2008-11-11',
        polygons_type: "Polygon Mesh",
        polygons_count: 15073,
        vertices_count: 18460,
        texture:1,
        material:1,
        rigged:1,
        animated:0,
        uv_mapped:1,
        unwrapped:1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:2,
        sub_category_id:8,
        user_id: 1,
      },
      {
        name: "Diamond_Sword",
        price:400,
        description: "A sword is a melee weapon that is mainly used to\
        deal damage to mobs and/or players. Swords are also useful for mining cobwebs.",
        image: "/image/product/minecraft.jpg",
        published_date: '2008-11-11',
        polygons_type: "Polygon Mesh",
        polygons_count: 300,
        vertices_count: 430,
        texture:0,
        material:1,
        rigged:0,
        animated:0,
        uv_mapped:1,
        unwrapped:0,
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:5,
        sub_category_id:17,
        user_id: 1,
      },
      {
        name: "Maskboy",
        price:1450,
        description: "This biped rig has a very pleasing cartoon aesthetic that would be perfect for some colourful animation.\
        Exaggeration is an important principle of animation and having a cartoon character allows you to practice this to the extreme.\
         It’s a pretty common feature in the genre.\
        This model comes with 3 preset poses, a standard T-pose, him holding the sword over his shoulder and a final pose of him in a battle stance.",
        image: "/image/product/maskboy.jpg",
        published_date: '2008-11-11',
        polygons_type: "Polygon Mesh",
        polygons_count: 165703,
        vertices_count: 21045,
        texture:1,
        material:0,
        rigged:1,
        animated:0,
        uv_mapped:1,
        unwrapped:1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:2,
        sub_category_id:6,
        user_id: 2,
      },
      {
        name: "Bus_B150",
        price:700,
        description: "Low poly 3d model of old bus.\
        Available 3d model format:\
        .fbx (Autodesk FBX)\
        Texture format: jpg\
        Free download this 3d objects and put it into your scene,\
        use it for 3d visualization project, CG artwork or digital art, 3d rendering or other field related to 3d design.",
        image: "/image/product/bus.jpg",
        published_date:'2008-11-11',
        polygons_type: "Polygon Mesh",
        polygons_count: 2000,
        vertices_count: 4530,
        texture:1,
        material:1,
        rigged:1,
        animated:0,
        uv_mapped:1,
        unwrapped:1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:3,
        sub_category_id:11,
        user_id: 2,
      },
      {
        name: "Warcaft",
        price:2000,
        description: "World of Warcraft (WoW) is a massively multiplayer online role-playing game (MMORPG)\
        released in 2004 by Blizzard Entertainment. It is the fourth released game set in the Warcraft\
        fantasy universe. ... The game was announced in 2001, and was released for the 10th anniversary of the Warcraft franchise on November 23, 2004.",
        image: "/image/product/warcraft.jpg",
        published_date: '2008-11-11',
        polygons_type: "Polygon Mesh",
        polygons_count: 45302,
        vertices_count: 54201,
        texture:1,
        material:1,
        rigged:1,
        animated:0,
        uv_mapped:1,
        unwrapped:1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:2,
        sub_category_id:8,
        user_id: 3,
      },
      {
        name: "Berry_Twig",
        price:1450,
        description: "this work was a bit of an experiment, i haven't had much experience with\
        designing casual animal characters. this one is a mix between a fox and a cat (or maybe a jaguar?)\
        this was a lot of fun to work on^^\
        edit: ...oh my god, i just realized the berries make no sense,\
        they're not attached to the twig at all! that's quite an amusing mistake,\
        i think i might just leave it like that for an extra laugh when i look at this picture again in some time, haha~",
        image: "/image/product/berrytwig.jpg",
        published_date: '2008-11-11',
        polygons_type: "Polygon Mesh",
        polygons_count: 23100,
        vertices_count: 40507,
        texture:1,
        material:1,
        rigged:1,
        animated:0,
        uv_mapped:1,
        unwrapped:1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:2,
        sub_category_id:8,
        user_id: 3,
      },
      {
        name: "Blue_Bycicle",
        price:730,
        description: "This is the 3d model of a racing bicycle, also known as a road bike.\
        The model has all the necessary details from the specific brakes to the gears and water bottles.",
        image: "/image/product/bicycle.jpg",
        published_date:'2008-11-11',
        polygons_type: "Polygon Mesh",
        polygons_count: 5400,
        vertices_count: 7841,
        texture:1,
        material:1,
        rigged:1,
        animated:0,
        uv_mapped:1,
        unwrapped:0,
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:3,
        sub_category_id:10,
        user_id: 3,
      },
      {
        name: "M4A1",
        price:500,
        description: "The M4 carbine is a shorter and lighter variant of the M16A2 assault rifle. \
        The M4 is a 5.56×45mm NATO, air-cooled, gas-operated,[a] magazine-fed carbine. It has a 14.5 in (370 mm) barrel and a telescoping stock.\
        The M4 carbine is extensively used by the United States Armed Forces and is largely replacing \
        the M16 rifle in United States Army and United States Marine Corps combat units as the primary infantry weapon[10][11] and service rifle.",
        image: "/image/product/M4A1.jpg",
        published_date:'2008-11-11',
        polygons_type: "Polygon Mesh",
        polygons_count: 5310,
        vertices_count: 4057,
        texture:1,
        material:1,
        rigged:0,
        animated:0,
        uv_mapped:1,
        unwrapped:0,
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:5,
        sub_category_id:18,
        user_id: 3,
      }
    ], {});
  },
};
