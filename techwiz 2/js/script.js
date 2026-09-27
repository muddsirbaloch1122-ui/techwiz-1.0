/* ===================== Market Link — script.js ===================== */

/* ---------------- Product Data ---------------- */
const PRODUCTS = [
  {id:1,name:"Fresh Organic Tomatoes",category:"Vegetables",price:120,oldPrice:150,rating:4.5,reviews:34,stock:80,unit:"kg",img:"https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500",gallery:["https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500","https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500"],farmer:"Rashid Khan",farm:"Green Valley Farm, Punjab",desc:"Vine-ripened organic tomatoes grown without synthetic pesticides. Rich in flavor, perfect for salads, sauces and everyday cooking."},
  {id:2,name:"Sweet Corn Cobs",category:"Vegetables",price:60,oldPrice:80,rating:4.2,reviews:21,stock:120,unit:"dozen",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRH15DocRraen_KszLUda9jJCsejiL1ARKMcRWcCzWg&s=10",gallery:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRH15DocRraen_KszLUda9jJCsejiL1ARKMcRWcCzWg&s=10"],farmer:"Ali Hassan",farm:"Sunrise Fields, Sindh",desc:"Freshly harvested sweet corn, hand-picked at peak ripeness for maximum sweetness and crunch."},
  {id:3,name:"Organic Spinach Bunch",category:"Vegetables",price:40,oldPrice:50,rating:4.6,reviews:18,stock:60,unit:"bunch",img:"https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500",gallery:["https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500"],farmer:"Sara Malik",farm:"Green Leaf Organics, Lahore",desc:"Nutrient-dense spinach leaves, washed and ready to cook. Great source of iron and vitamins."},
  {id:4,name:"Farm Fresh Carrots",category:"Vegetables",price:70,oldPrice:90,rating:4.3,reviews:27,stock:95,unit:"kg",img:"https://images.unsplash.com/photo-1447175008436-054170c2e979?w=500",gallery:["https://images.unsplash.com/photo-1447175008436-054170c2e979?w=500"],farmer:"Rashid Khan",farm:"Green Valley Farm, Punjab",desc:"Crunchy, sweet carrots grown in mineral-rich soil. Excellent for juicing, roasting or snacking."},
  {id:5,name:"Red Apples (Kashmiri)",category:"Fruits",price:220,oldPrice:260,rating:4.7,reviews:52,stock:150,unit:"kg",img:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500",gallery:["https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500"],farmer:"Imran Baig",farm:"Highland Orchards, Kashmir",desc:"Crisp and juicy Kashmiri apples, naturally sun-ripened in the northern valleys."},
  {id:6,name:"Alphonso Mangoes",category:"Fruits",price:350,oldPrice:420,rating:4.9,reviews:88,stock:70,unit:"kg",img:"https://images.unsplash.com/photo-1553279768-865429fa0078?w=500",gallery:["https://images.unsplash.com/photo-1553279768-865429fa0078?w=500"],farmer:"Bilal Ahmed",farm:"Mango Valley, Multan",desc:"The king of fruits — sweet, aromatic Alphonso mangoes harvested at the perfect ripeness."},
  {id:7,name:"Seedless Green Grapes",category:"Fruits",price:180,oldPrice:210,rating:4.4,reviews:29,stock:65,unit:"kg",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCPv4o5xGA8GzV6oXhy_dAjiXURiwK6qrGOA-zohPyQ&s=10",gallery:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCPv4o5xGA8GzV6oXhy_dAjiXURiwK6qrGOA-zohPyQ&s=10"],farmer:"Imran Baig",farm:"Highland Orchards, Kashmir",desc:"Sweet, crisp seedless grapes — perfect for snacking, salads or freezing."},
  {id:8,name:"Fresh Bananas",category:"Fruits",price:90,oldPrice:110,rating:4.1,reviews:40,stock:200,unit:"dozen",img:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500",gallery:["https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500"],farmer:"Ali Hassan",farm:"Sunrise Fields, Sindh",desc:"Naturally ripened bananas packed with potassium and energy."},
  {id:9,name:"Hybrid Tomato Seeds",category:"Seeds",price:150,oldPrice:180,rating:4.5,reviews:16,stock:300,unit:"pack",img:"https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=500",gallery:["https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=500"],farmer:"AgriSeed Co.",farm:"Certified Seed Supplier",desc:"High-yield hybrid tomato seeds with strong disease resistance, ideal for home and commercial farming."},
  {id:10,name:"Organic Wheat Seeds",category:"Seeds",price:200,oldPrice:240,rating:4.3,reviews:12,stock:400,unit:"5kg bag",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqIT0mF-xzWPEAGS782mgTJzd2gslFGgAUH3k2JzNdJw&s=10",gallery:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqIT0mF-xzWPEAGS782mgTJzd2gslFGgAUH3k2JzNdJw&s=10"],farmer:"AgriSeed Co.",farm:"Certified Seed Supplier",desc:"Premium certified wheat seeds bred for high germination and drought tolerance."},
  {id:11,name:"Sunflower Seeds Pack",category:"Seeds",price:130,oldPrice:150,rating:4.2,reviews:9,stock:250,unit:"pack",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7BNPVaGk2_tHTwJXnHy-rg98T-W2p_NPi4QgCcxSjRw&s=10",gallery:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7BNPVaGk2_tHTwJXnHy-rg98T-W2p_NPi4QgCcxSjRw&s=10"],farmer:"GreenGrow Seeds",farm:"Certified Seed Supplier",desc:"High oil-content sunflower seeds suitable for oil extraction and ornamental growing."},
  {id:12,name:"Organic Compost Fertilizer",category:"Fertilizers",price:450,oldPrice:520,rating:4.6,reviews:44,stock:100,unit:"25kg bag",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW5Qj37osDRdIBqMc3s4kouiTRN4PfM5klnajNHAO0Q&s=10",gallery:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW5Qj37osDRdIBqMc3s4kouiTRN4PfM5klnajNHAO0Q&s=10"],farmer:"EcoSoil Farms",farm:"Organic Inputs Supplier",desc:"100% organic compost that enriches soil structure and boosts crop yield naturally."},
  {id:13,name:"NPK Balanced Fertilizer",category:"Fertilizers",price:600,oldPrice:700,rating:4.4,reviews:31,stock:80,unit:"50kg bag",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PtcVwEpTw1ADUMLKo6OdCzOO4k-NMMJoeDZWJCNZeQ&s=10",gallery:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PtcVwEpTw1ADUMLKo6OdCzOO4k-NMMJoeDZWJCNZeQ&s=10"],farmer:"EcoSoil Farms",farm:"Organic Inputs Supplier",desc:"Balanced NPK formula for healthy vegetative growth, flowering and fruiting."},
  {id:14,name:"Vermicompost 5kg",category:"Fertilizers",price:280,oldPrice:320,rating:4.7,reviews:22,stock:90,unit:"5kg bag",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYbtYiw4dPhFSWqkof47w4_MlrgRYYjkL9HVObW9mtw&s=10",gallery:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYbtYiw4dPhFSWqkof47w4_MlrgRYYjkL9HVObW9mtw&s=10"],farmer:"WormWorks Organics",farm:"Organic Inputs Supplier",desc:"Nutrient-rich vermicompost produced through natural earthworm composting."},
  {id:15,name:"Heavy Duty Garden Hoe",category:"Farming Tools",price:850,oldPrice:950,rating:4.5,reviews:19,stock:40,unit:"piece",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJLL8SBWZmxFAt0mIJYAzRZZjBNcY53x6rVhgtwgwfw&s=10",gallery:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJLL8SBWZmxFAt0mIJYAzRZZjBNcY53x6rVhgtwgwfw&s=10"],farmer:"AgroTools Ltd",farm:"Equipment Supplier",desc:"Durable steel garden hoe with ergonomic handle, built for daily farm use."},
  {id:16,name:"Manual Seed Sower",category:"Farming Tools",price:1200,oldPrice:1400,rating:4.3,reviews:14,stock:25,unit:"piece",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5dJNy24nPy4HaT4G7ksGjdQOISTJsw9Er61YXMGb2g&s=10",gallery:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5dJNy24nPy4HaT4G7ksGjdQOISTJsw9Er61YXMGb2g&s=10"],farmer:"AgroTools Ltd",farm:"Equipment Supplier",desc:"Precision seed sower for even spacing and depth, reducing seed wastage."},
  {id:17,name:"Pruning Shears Pro",category:"Farming Tools",price:650,oldPrice:750,rating:4.6,reviews:33,stock:55,unit:"piece",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYKFPVkr32oUpNnMRkmawZRxNsmDz2o_XnndkLZqEiA&s=10",gallery:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYKFPVkr32oUpNnMRkmawZRxNsmDz2o_XnndkLZqEiA&s=10"],farmer:"AgroTools Ltd",farm:"Equipment Supplier",desc:"Sharp, comfortable pruning shears for clean cuts on branches and stems."},
  {id:18,name:"Money Plant (Potted)",category:"Plants",price:300,oldPrice:350,rating:4.4,reviews:26,stock:70,unit:"pot",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtxUjaC1AQvflTTeyb5QlZbB_bIntW_knJgVtjIve4Q&s=10",gallery:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtxUjaC1AQvflTTeyb5QlZbB_bIntW_knJgVtjIve4Q&s=10"],farmer:"Green Nursery Co.",farm:"Urban Plant Nursery",desc:"Easy-care money plant known for air purification and low maintenance needs."},
  {id:19,name:"Aloe Vera Plant",category:"Plants",price:250,oldPrice:290,rating:4.5,reviews:20,stock:85,unit:"pot",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDVlFgDVm_09C0DpGoC18Cw-A1a30EpiUrS4sWtni2Q&s=10",gallery:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDVlFgDVm_09C0DpGoC18Cw-A1a30EpiUrS4sWtni2Q&s=10"],farmer:"Green Nursery Co.",farm:"Urban Plant Nursery",desc:"Medicinal aloe vera plant, ideal for skincare and home gardens."},
  {id:20,name:"Lemon Sapling",category:"Plants",price:400,oldPrice:450,rating:4.3,reviews:15,stock:45,unit:"sapling",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySLx2yilMH9hKKb9KUfv9OpzSIJpNqsrVgg8J5StMsQ&s=10",gallery:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySLx2yilMH9hKKb9KUfv9OpzSIJpNqsrVgg8J5StMsQ&s=10https://images.unsplash.com/photo-1590502593245-2b2c2b2c2b2c?w=500"],farmer:"Green Nursery Co.",farm:"Urban Plant Nursery",desc:"Healthy grafted lemon sapling that fruits within 2 years of planting."},
  {id:21,name:"Raw Organic Honey",category:"Organic Products",price:800,oldPrice:900,rating:4.8,reviews:60,stock:50,unit:"500g jar",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjECvO6JjB9d1aKEjtFq8hKLxWZeeU10F7XStIKPhLg&s=10",gallery:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjECvO6JjB9d1aKEjtFq8hKLxWZeeU10F7XStIKPhLg&s=10"],farmer:"Bee Natural Farms",farm:"Organic Apiary, Punjab",desc:"Pure, unprocessed honey harvested directly from local beehives."},
  {id:22,name:"Cold-Pressed Mustard Oil",category:"Organic Products",price:500,oldPrice:580,rating:4.5,reviews:24,stock:60,unit:"1L bottle",img:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500",gallery:["https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500"],farmer:"PureOil Traders",farm:"Organic Oil Mill",desc:"Traditionally cold-pressed mustard oil, retaining natural nutrients and flavor."},
  {id:23,name:"Organic Brown Rice",category:"Organic Products",price:280,oldPrice:320,rating:4.4,reviews:18,stock:100,unit:"5kg bag",img:"https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",gallery:["https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500"],farmer:"PureOil Traders",farm:"Organic Farm Collective",desc:"Unpolished organic brown rice, rich in fiber and grown without chemical inputs."},
  {id:24,name:"Poultry Feed Premium",category:"Livestock Supplies",price:1500,oldPrice:1700,rating:4.3,reviews:11,stock:40,unit:"25kg bag",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_nDHvLv38_K_ffLkjGQqbXwBKqs_1CssvGPSlp7K8Q&s=10",gallery:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_nDHvLv38_K_ffLkjGQqbXwBKqs_1CssvGPSlp7K8Q&s=10"],farmer:"LivestockPlus",farm:"Feed & Supply Co.",desc:"Balanced poultry feed formulated for optimal growth and egg production."},
  {id:25,name:"Cattle Mineral Blocks",category:"Livestock Supplies",price:900,oldPrice:1050,rating:4.2,reviews:8,stock:60,unit:"5kg block",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxmhFgc02jWsK8p_Cp90qOQVGA828H7jwHY7NoSDnwA&s=10",gallery:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxmhFgc02jWsK8p_Cp90qOQVGA828H7jwHY7NoSDnwA&s=10"],farmer:"LivestockPlus",farm:"Feed & Supply Co.",desc:"Essential mineral supplement blocks to keep cattle healthy and productive."}
];

const CATEGORIES = [...new Set(PRODUCTS.map(p=>p.category))];
const CAT_ICONS = {"Vegetables":"fa-carrot","Fruits":"fa-apple-whole","Seeds":"fa-seedling","Fertilizers":"fa-flask","Farming Tools":"fa-tractor","Plants":"fa-leaf","Organic Products":"fa-jar","Livestock Supplies":"fa-cow"};

const FARMERS = [
  {name:"Rashid Khan",farm:"Green Valley Farm",loc:"Punjab, Pakistan",img:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300",tag:"Verified Seller"},
  {name:"Ali Hassan",farm:"Sunrise Fields",loc:"Sindh, Pakistan",img:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=301",tag:"Top Rated"},
  {name:"Sara Malik",farm:"Green Leaf Organics",loc:"Lahore, Pakistan",img:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300",tag:"Organic Certified"},
  {name:"Imran Baig",farm:"Highland Orchards",loc:"Kashmir",img:"https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=300",tag:"Verified Seller"}
];

const TESTIMONIALS = [
  {name:"Ayesha Noor",role:"Home Cook, Karachi",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",rating:5,quote:"The vegetables are always fresh and delivered fast. Market Link has changed how I shop for groceries."},
  {name:"Usman Tariq",role:"Restaurant Owner",img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",rating:5,quote:"Sourcing directly from farmers means better quality and fair prices. Highly recommend for businesses."},
  {name:"Hina Farooq",role:"Home Gardener",img:"https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100",rating:4,quote:"Great selection of seeds and plants. Customer support helped me pick the right fertilizer too."}
];

/* ---------------- Storage Helpers ---------------- */
const Store = {
  get(key,fallback){try{const v=JSON.parse(localStorage.getItem(key));return v===null?fallback:v;}catch(e){return fallback;}},
  set(key,val){localStorage.setItem(key,JSON.stringify(val));}
};
function getCart(){return Store.get('ml_cart',[]);}
function setCart(c){Store.set('ml_cart',c);updateCartCount();}
function getWishlist(){return Store.get('ml_wishlist',[]);}
function setWishlist(w){Store.set('ml_wishlist',w);updateWishlistCount();}

/* ---------------- Toast ---------------- */
function showToast(msg,type='success'){
  let container=document.getElementById('toastContainer');
  if(!container){
    container=document.createElement('div');
    container.id='toastContainer';
    container.className='toast-container';
    document.body.appendChild(container);
  }
  const toast=document.createElement('div');
  toast.className='toast'+(type==='error'?' error':'');
  toast.innerHTML=`<i class="fa-solid ${type==='error'?'fa-triangle-exclamation':'fa-circle-check'}"></i><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(()=>{toast.style.opacity='0';toast.style.transition='opacity 0.3s';setTimeout(()=>toast.remove(),300);},2600);
}

/* ---------------- Cart Actions ---------------- */
function addToCart(id,qty=1){
  const cart=getCart();
  const existing=cart.find(i=>i.id===id);
  if(existing){existing.qty+=qty;}else{cart.push({id,qty});}
  setCart(cart);
  const p=PRODUCTS.find(p=>p.id===id);
  showToast(`${p?p.name:'Item'} added to cart`);
}
function removeFromCart(id){
  setCart(getCart().filter(i=>i.id!==id));
  showToast('Item removed from cart');
  if(document.getElementById('cartPageBody'))renderCartPage();
}
function updateCartQty(id,qty){
  const cart=getCart();
  const item=cart.find(i=>i.id===id);
  if(!item)return;
  item.qty=Math.max(1,qty);
  setCart(cart);
  if(document.getElementById('cartPageBody'))renderCartPage();
}
function updateCartCount(){
  const count=getCart().reduce((s,i)=>s+i.qty,0);
  document.querySelectorAll('.cart-count').forEach(el=>{
    el.textContent=count;
    el.style.display=count>0?'flex':'none';
  });
  triggerBadgePulse('.cart-count');
}
function toggleWishlist(id,btnEl){
  let wl=getWishlist();
  const p=PRODUCTS.find(p=>p.id===id);
  if(wl.includes(id)){
    wl=wl.filter(x=>x!==id);
    if(btnEl)btnEl.classList.remove('active');
    showToast(`${p?p.name:'Item'} removed from wishlist`);
  }else{
    wl.push(id);
    if(btnEl)btnEl.classList.add('active');
    showToast(`${p?p.name:'Item'} added to wishlist`);
  }
  setWishlist(wl);
}
function updateWishlistCount(){
  const count=getWishlist().length;
  document.querySelectorAll('.wishlist-count').forEach(el=>{
    el.textContent=count;
    el.style.display=count>0?'flex':'none';
  });
  triggerBadgePulse('.wishlist-count');
}

function triggerBadgePulse(selector){
  document.querySelectorAll(selector).forEach(b=>{
    b.classList.remove('pulse');
    void b.offsetWidth;
    b.classList.add('pulse');
  });
}

/* ---------------- Star Rating Renderer ---------------- */
function renderStars(rating){
  const full=Math.floor(rating);
  const half=rating-full>=0.5;
  let s='';
  for(let i=0;i<full;i++)s+='<i class="fa-solid fa-star"></i>';
  if(half)s+='<i class="fa-solid fa-star-half-stroke"></i>';
  for(let i=full+(half?1:0);i<5;i++)s+='<i class="fa-regular fa-star"></i>';
  return s;
}

/* ---------------- Product Card Renderer ---------------- */
function productCardHTML(p, idx=0){
  const wl=getWishlist();
  const discount=Math.round((1-p.price/p.oldPrice)*100);
  const staggerClass = `stagger-${(idx % 6) + 1}`;
  return `
  <div class="product-card reveal-up ${staggerClass}" data-id="${p.id}">
    <div class="product-img">
      ${discount>0?`<span class="discount-tag">-${discount}%</span>`:''}
      <button class="wishlist-btn ${wl.includes(p.id)?'active':''}" onclick="toggleWishlist(${p.id},this)" aria-label="Toggle wishlist"><i class="fa-solid fa-heart"></i></button>
      <a href="product-details.html?id=${p.id}"><img src="${p.img}" alt="${p.name}" loading="lazy"></a>
    </div>
    <div class="product-body">
      <span class="product-cat">${p.category}</span>
      <a href="product-details.html?id=${p.id}" class="product-name">${p.name}</a>
      <div class="rating">${renderStars(p.rating)} <span>(${p.reviews})</span></div>
      <div class="price-row">
        <span class="price">Rs ${p.price}</span>
        ${p.oldPrice>p.price?`<span class="old-price">Rs ${p.oldPrice}</span>`:''}
      </div>
    </div>
    <div class="product-footer">
      <button class="add-cart-btn" onclick="addToCart(${p.id})">🛒 Add to Cart</button>
    </div>
  </div>`;
}

/* ---------------- Homepage Renderers ---------------- */
function renderHomeCategories(){
  const el=document.getElementById('homeCategories');
  if(!el)return;
  el.innerHTML=CATEGORIES.map((c, i)=>{
    const count=PRODUCTS.filter(p=>p.category===c).length;
    const staggerClass=`stagger-${(i % 6) + 1}`;
    return `<a href="products.html?category=${encodeURIComponent(c)}" class="cat-card reveal-zoom ${staggerClass}">
      <div class="cat-icon"><i class="fa-solid ${CAT_ICONS[c]||'fa-wheat-awn'}"></i></div>
      <h4>${c}</h4><p>${count} Products</p>
    </a>`;
  }).join('');
  observeNewReveals();
}
function renderFeaturedProducts(){
  const el=document.getElementById('featuredProducts');
  if(!el)return;
  const featured=[...PRODUCTS].sort((a,b)=>b.rating-a.rating).slice(0,8);
  el.innerHTML=featured.map((p, idx)=>productCardHTML(p, idx)).join('');
  observeNewReveals();
}
function renderFarmers(){
  const el=document.getElementById('farmersGrid');
  if(!el)return;
  el.innerHTML=FARMERS.map((f, i)=>`
    <div class="farmer-card reveal-up stagger-${(i % 4) + 1}">
      <img src="${f.img}" alt="${f.name}" class="farmer-avatar">
      <h4>${f.name}</h4>
      <p class="farm-loc">${f.farm}, ${f.loc}</p>
      <span class="farmer-tag">${f.tag}</span>
    </div>`).join('');
  observeNewReveals();
}
function renderTestimonials(){
  const el=document.getElementById('testimonialsGrid');
  if(!el)return;
  el.innerHTML=TESTIMONIALS.map((t, i)=>`
    <div class="testi-card reveal-up stagger-${(i % 3) + 1}">
      <div class="rating">${renderStars(t.rating)}</div>
      <p class="quote">"${t.quote}"</p>
      <div class="testi-user">
        <img src="${t.img}" alt="${t.name}">
        <div><h5>${t.name}</h5><span>${t.role}</span></div>
      </div>
    </div>`).join('');
  observeNewReveals();
}

/* ---------------- Shop / Products Page ---------------- */
let shopState={search:'',categories:[],minPrice:0,maxPrice:1000,minRating:0,sort:'default',page:1};

function getMaxPrice(){return Math.max(...PRODUCTS.map(p=>p.price))+50;}

function initShopPage(){
  const grid=document.getElementById('productGrid');
  if(!grid)return;
  const params=new URLSearchParams(window.location.search);
  const catParam=params.get('category');
  const searchParam=params.get('search');
  shopState.maxPrice=getMaxPrice();
  if(catParam)shopState.categories=[catParam];
  if(searchParam)shopState.search=searchParam;

  const catList=document.getElementById('categoryFilterList');
  if(catList){
    catList.innerHTML=CATEGORIES.map(c=>`
      <label class="filter-option">
        <input type="checkbox" value="${c}" ${shopState.categories.includes(c)?'checked':''} onchange="onCategoryFilterChange(this)">
        ${c} (${PRODUCTS.filter(p=>p.category===c).length})
      </label>`).join('');
  }
  const priceRange=document.getElementById('priceRange');
  if(priceRange){
    priceRange.max=shopState.maxPrice;
    priceRange.value=shopState.maxPrice;
    shopState.maxPrice=Number(priceRange.value);
    priceRange.addEventListener('input',e=>{
      shopState.maxPrice=Number(e.target.value);
      document.getElementById('priceRangeMax').textContent='Rs '+e.target.value;
      renderShopProducts();
    });
    document.getElementById('priceRangeMax').textContent='Rs '+priceRange.value;
  }
  const searchInput=document.getElementById('shopSearchInput');
  if(searchInput){
    searchInput.value=shopState.search;
    searchInput.addEventListener('input',e=>{shopState.search=e.target.value;renderShopProducts();});
  }
  const sortSelect=document.getElementById('sortSelect');
  if(sortSelect){
    sortSelect.addEventListener('change',e=>{shopState.sort=e.target.value;renderShopProducts();});
  }
  document.querySelectorAll('input[name="ratingFilter"]').forEach(r=>{
    r.addEventListener('change',e=>{shopState.minRating=Number(e.target.value);renderShopProducts();});
  });
  renderShopProducts();
}
function onCategoryFilterChange(el){
  if(el.checked)shopState.categories.push(el.value);
  else shopState.categories=shopState.categories.filter(c=>c!==el.value);
  renderShopProducts();
}
function clearAllFilters(){
  shopState={search:'',categories:[],minPrice:0,maxPrice:getMaxPrice(),minRating:0,sort:'default',page:1};
  window.location.href='products.html';
}
function renderShopProducts(){
  let list=PRODUCTS.filter(p=>{
    const matchSearch=p.name.toLowerCase().includes(shopState.search.toLowerCase())||p.category.toLowerCase().includes(shopState.search.toLowerCase());
    const matchCat=shopState.categories.length===0||shopState.categories.includes(p.category);
    const matchPrice=p.price<=shopState.maxPrice;
    const matchRating=p.rating>=shopState.minRating;
    return matchSearch&&matchCat&&matchPrice&&matchRating;
  });
  switch(shopState.sort){
    case 'price-asc':list.sort((a,b)=>a.price-b.price);break;
    case 'price-desc':list.sort((a,b)=>b.price-a.price);break;
    case 'rating':list.sort((a,b)=>b.rating-a.rating);break;
    case 'name':list.sort((a,b)=>a.name.localeCompare(b.name));break;
  }
  const grid=document.getElementById('productGrid');
  const countEl=document.getElementById('resultsCount');
  if(countEl)countEl.textContent=`Showing ${list.length} of ${PRODUCTS.length} products`;
  grid.innerHTML=list.length?list.map(productCardHTML).join(''):'<p class="no-results">No products match your filters. Try adjusting your search.</p>';
  observeNewReveals();
}

/* ---------------- Product Details Page ---------------- */
function initProductDetailsPage(){
  const wrap=document.getElementById('pdWrap');
  if(!wrap)return;
  const params=new URLSearchParams(window.location.search);
  const id=Number(params.get('id'))||PRODUCTS[0].id;
  const p=PRODUCTS.find(p=>p.id===id)||PRODUCTS[0];
  const wl=getWishlist();
  document.title=p.name+' | Market Link';

  document.getElementById('pdBreadcrumbName').textContent=p.name;
  document.getElementById('pdMainImg').src=p.img;
  document.getElementById('pdThumbs').innerHTML=p.gallery.map((g,i)=>`<img src="${g}" class="${i===0?'active':''}" onclick="pdSwapImage(this,'${g}')" alt="thumbnail">`).join('');
  document.getElementById('pdName').textContent=p.name;
  document.getElementById('pdCategory').textContent=p.category;
  document.getElementById('pdRating').innerHTML=`${renderStars(p.rating)} <span>(${p.reviews} reviews)</span>`;
  document.getElementById('pdPrice').textContent='Rs '+p.price;
  document.getElementById('pdOldPrice').textContent=p.oldPrice>p.price?'Rs '+p.oldPrice:'';
  document.getElementById('pdStock').textContent=p.stock>0?`In Stock (${p.stock} ${p.unit} available)`:'Out of Stock';
  document.getElementById('pdDesc').textContent=p.desc;
  document.getElementById('pdWishBtn').classList.toggle('active',wl.includes(p.id));
  document.getElementById('pdWishBtn').onclick=()=>toggleWishlist(p.id,document.getElementById('pdWishBtn'));
  document.getElementById('pdSpecs').innerHTML=`
    <tr><td>Category</td><td>${p.category}</td></tr>
    <tr><td>Unit</td><td>${p.unit}</td></tr>
    <tr><td>Stock Available</td><td>${p.stock} ${p.unit}</td></tr>
    <tr><td>Rating</td><td>${p.rating} / 5 (${p.reviews} reviews)</td></tr>
    <tr><td>Farmer</td><td>${p.farmer}</td></tr>
    <tr><td>Farm Location</td><td>${p.farm}</td></tr>`;
  document.getElementById('pdFarmerInfo').innerHTML=`
    <div class="farmer-info-box">
      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100" alt="${p.farmer}" style="width:64px;height:64px;border-radius:50%;object-fit:cover;">
      <div><h4>${p.farmer}</h4><p style="color:var(--text-light)">${p.farm}</p></div>
    </div>`;
  const reviews=[
    {name:"Zainab R.",rating:5,text:"Excellent quality, exactly as described. Will order again!"},
    {name:"Farhan S.",rating:4,text:"Good product, delivery was on time."},
    {name:"Nadia K.",rating:5,text:"Fresh and well packaged. Highly recommend this seller."}
  ];
  document.getElementById('pdReviews').innerHTML=reviews.map(r=>`
    <div class="review-item">
      <div class="review-head"><strong>${r.name}</strong><span class="rating">${renderStars(r.rating)}</span></div>
      <p style="color:var(--text-light)">${r.text}</p>
    </div>`).join('');

  let qty=1;
  document.getElementById('qtyValue').value=qty;
  document.getElementById('qtyMinus').onclick=()=>{qty=Math.max(1,qty-1);document.getElementById('qtyValue').value=qty;};
  document.getElementById('qtyPlus').onclick=()=>{qty=Math.min(p.stock,qty+1);document.getElementById('qtyValue').value=qty;};
  document.getElementById('pdAddCart').onclick=()=>addToCart(p.id,Number(document.getElementById('qtyValue').value));
  document.getElementById('pdBuyNow').onclick=()=>{addToCart(p.id,Number(document.getElementById('qtyValue').value));window.location.href='checkout.html';};

  document.querySelectorAll('.pd-tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.pd-tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.pd-tab-panel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  const related=PRODUCTS.filter(rp=>rp.category===p.category&&rp.id!==p.id).slice(0,4);
  document.getElementById('relatedProducts').innerHTML=related.map(productCardHTML).join('');
}
function pdSwapImage(el,src){
  document.getElementById('pdMainImg').src=src;
  document.querySelectorAll('.pd-thumbs img').forEach(i=>i.classList.remove('active'));
  el.classList.add('active');
}

/* ---------------- Cart Page ---------------- */
function renderCartPage(){
  const body=document.getElementById('cartPageBody');
  if(!body)return;
  const cart=getCart();
  const layout=document.getElementById('cartLayout');
  const emptyState=document.getElementById('cartEmptyState');
  if(cart.length===0){
    layout.style.display='none';
    emptyState.style.display='block';
    return;
  }
  layout.style.display='grid';
  emptyState.style.display='none';
  let subtotal=0;
  body.innerHTML=cart.map(item=>{
    const p=PRODUCTS.find(p=>p.id===item.id);
    if(!p)return'';
    const lineTotal=p.price*item.qty;
    subtotal+=lineTotal;
    return `<tr>
      <td data-label="Product"><div class="cart-prod"><img src="${p.img}" alt="${p.name}"><div><strong>${p.name}</strong><br><span style="color:var(--text-light);font-size:0.85rem">${p.category}</span></div></div></td>
      <td data-label="Price">Rs ${p.price}</td>
      <td data-label="Quantity">
        <div class="qty-selector">
          <button onclick="updateCartQty(${p.id},${item.qty-1})"><i class="fa-solid fa-minus"></i></button>
          <input type="text" readonly value="${item.qty}">
          <button onclick="updateCartQty(${p.id},${item.qty+1})"><i class="fa-solid fa-plus"></i></button>
        </div>
      </td>
      <td data-label="Total">Rs ${lineTotal}</td>
      <td data-label="Remove"><button class="remove-btn" onclick="removeFromCart(${p.id})"><i class="fa-solid fa-trash"></i></button></td>
    </tr>`;
  }).join('');
  const delivery=subtotal>2000||subtotal===0?0:150;
  const discount=Math.round(subtotal*(window.__promoApplied?0.1:0));
  const total=subtotal+delivery-discount;
  document.getElementById('cartSubtotal').textContent='Rs '+subtotal;
  document.getElementById('cartDelivery').textContent=delivery===0?'Free':'Rs '+delivery;
  document.getElementById('cartDiscount').textContent='- Rs '+discount;
  document.getElementById('cartTotal').textContent='Rs '+total;
  Store.set('ml_cart_total',total);
}
function applyPromoCode(){
  const input=document.getElementById('promoCodeInput');
  const code=input.value.trim().toUpperCase();
  if(code==='FARM10'){
    window.__promoApplied=true;
    showToast('Promo code applied! 10% off');
  }else{
    showToast('Invalid promo code','error');
  }
  renderCartPage();
}

/* ---------------- Checkout Page ---------------- */
function initCheckoutPage(){
  const summaryEl=document.getElementById('checkoutOrderItems');
  if(!summaryEl)return;
  const cart=getCart();
  if(cart.length===0){
    window.location.href='cart.html';
    return;
  }
  let subtotal=0;
  summaryEl.innerHTML=cart.map(item=>{
    const p=PRODUCTS.find(p=>p.id===item.id);
    if(!p)return'';
    subtotal+=p.price*item.qty;
    return `<div class="order-item-row"><span>${p.name} × ${item.qty}</span><span>Rs ${p.price*item.qty}</span></div>`;
  }).join('');
  const delivery=subtotal>2000?0:150;
  const total=subtotal+delivery;
  document.getElementById('checkoutSubtotal').textContent='Rs '+subtotal;
  document.getElementById('checkoutDelivery').textContent=delivery===0?'Free':'Rs '+delivery;
  document.getElementById('checkoutTotal').textContent='Rs '+total;

  document.querySelectorAll('.pay-option').forEach(opt=>{
    opt.addEventListener('click',()=>{
      document.querySelectorAll('.pay-option').forEach(o=>o.classList.remove('selected'));
      opt.classList.add('selected');
      opt.querySelector('input').checked=true;
    });
  });

  const form=document.getElementById('checkoutForm');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!validateForm(form))return;
    const orderNum='ML'+Math.floor(100000+Math.random()*900000);
    document.getElementById('orderNumberDisplay').textContent=orderNum;
    setCart([]);
    document.getElementById('successModal').classList.add('open');
  });
}

/* ---------------- Form Validation ---------------- */
function validateForm(form){
  let valid=true;
  form.querySelectorAll('[required]').forEach(field=>{
    const group=field.closest('.form-group');
    let fieldValid=field.value.trim()!=='';
    if(field.type==='email'&&fieldValid){
      fieldValid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
    }
    if(field.type==='tel'&&fieldValid){
      fieldValid=/^[\d+\-\s()]{7,15}$/.test(field.value);
    }
    if(field.dataset.minlength&&fieldValid){
      fieldValid=field.value.length>=Number(field.dataset.minlength);
    }
    if(field.dataset.match&&fieldValid){
      const matchField=form.querySelector(`[name="${field.dataset.match}"]`);
      fieldValid=matchField&&matchField.value===field.value;
    }
    if(group){
      group.classList.toggle('error',!fieldValid);
    }
    if(!fieldValid)valid=false;
  });
  return valid;
}

/* ---------------- Auth Pages ---------------- */
function initLoginPage(){
  const form=document.getElementById('loginForm');
  if(!form)return;
  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!validateForm(form))return;
    showToast('Login successful! Redirecting...');
    setTimeout(()=>window.location.href='index.html',1200);
  });
}
function initRegisterPage(){
  const form=document.getElementById('registerForm');
  if(!form)return;
  let accType='customer';
  document.querySelectorAll('.acc-type-card').forEach(card=>{
    card.addEventListener('click',()=>{
      document.querySelectorAll('.acc-type-card').forEach(c=>c.classList.remove('selected'));
      card.classList.add('selected');
      accType=card.dataset.type;
    });
  });
  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!validateForm(form))return;
    showToast(`Account created as ${accType}! Redirecting to login...`);
    setTimeout(()=>window.location.href='login.html',1400);
  });
}

/* ---------------- Forgot Password Page ---------------- */
function initForgotPasswordPage(){
  const reqForm = document.getElementById('fpRequestForm');
  const verifyForm = document.getElementById('fpVerifyForm');
  const successStep = document.getElementById('fpSuccessStep');
  if(!reqForm || !verifyForm) return;

  reqForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(!validateForm(reqForm)) return;
    const emailVal = document.getElementById('fpEmail').value.trim();
    document.getElementById('sentEmailDisplay').textContent = emailVal;
    
    showToast(`OTP Code sent to ${emailVal}`);
    reqForm.classList.add('hidden');
    verifyForm.classList.remove('hidden');

    // Auto focus first OTP digit
    const firstOtp = verifyForm.querySelector('.otp-digit');
    if(firstOtp) firstOtp.focus();
  });

  // Handle OTP digit auto-advance
  const otpDigits = verifyForm.querySelectorAll('.otp-digit');
  otpDigits.forEach((digit, index)=>{
    digit.addEventListener('input', (e)=>{
      if(e.target.value.length === 1 && index < otpDigits.length - 1){
        otpDigits[index + 1].focus();
      }
    });
    digit.addEventListener('keydown', (e)=>{
      if(e.key === 'Backspace' && !e.target.value && index > 0){
        otpDigits[index - 1].focus();
      }
    });
  });

  verifyForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(!validateForm(verifyForm)) return;

    let otpFilled = true;
    otpDigits.forEach(d => { if(!d.value) otpFilled = false; });
    if(!otpFilled){
      showToast('Please enter the 4-digit OTP code', 'error');
      return;
    }

    showToast('Password reset successfully!');
    verifyForm.classList.add('hidden');
    if(successStep) successStep.classList.remove('hidden');
  });
}

/* ---------------- Contact Page ---------------- */
function initContactPage(){
  const form=document.getElementById('contactForm');
  if(!form)return;
  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!validateForm(form))return;
    showToast('Message sent! We will get back to you soon.');
    form.reset();
  });
}

/* ---------------- Newsletter ---------------- */
function initNewsletterForm(){
  const form=document.getElementById('newsletterForm');
  if(!form)return;
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const input=form.querySelector('input');
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)){
      showToast('Please enter a valid email','error');return;
    }
    showToast('Subscribed successfully!');
    form.reset();
  });
}

/* ---------------- Navbar / Mobile Menu / Search ---------------- */
function initNavbar(){
  const hamburger=document.getElementById('hamburgerBtn');
  const mobileMenu=document.getElementById('mobileMenu');
  if(hamburger&&mobileMenu){
    hamburger.addEventListener('click',()=>mobileMenu.classList.toggle('open'));
  }
  document.querySelectorAll('.nav-search-form').forEach(form=>{
    const input=form.querySelector('input');
    let dropdown=document.createElement('div');
    dropdown.className='search-dropdown';
    form.style.position='relative';
    form.appendChild(dropdown);

    form.addEventListener('submit',e=>{
      e.preventDefault();
      const q=input.value.trim();
      window.location.href='products.html?search='+encodeURIComponent(q);
    });

    input.addEventListener('input',()=>{
      const q=input.value.trim().toLowerCase();
      if(q.length<1){dropdown.classList.remove('open');dropdown.innerHTML='';return;}
      const matches=PRODUCTS.filter(p=>p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q)).slice(0,6);
      if(matches.length===0){
        dropdown.innerHTML='<div class="search-dropdown-empty"><i class="fa-solid fa-magnifying-glass"></i> No products found</div>';
      }else{
        dropdown.innerHTML=matches.map(p=>`
          <a href="product-details.html?id=${p.id}" class="search-dropdown-item">
            <img src="${p.img}" alt="${p.name}">
            <div class="search-dropdown-item-info">
              <span class="sdi-name">${p.name}</span>
              <span class="sdi-cat">${p.category} · Rs ${p.price}</span>
            </div>
          </a>`).join('')
          +`<a href="products.html?search=${encodeURIComponent(q)}" class="search-dropdown-viewall"><i class="fa-solid fa-magnifying-glass"></i> View all results for "${q}"</a>`;
      }
      dropdown.classList.add('open');
    });

    document.addEventListener('click',(e)=>{
      if(!form.contains(e.target))dropdown.classList.remove('open');
    });
  });

  window.addEventListener('scroll',()=>{
    const nav=document.querySelector('.navbar');
    if(nav)nav.classList.toggle('scrolled',window.scrollY>30);
  });

  updateCartCount();
  updateWishlistCount();
  highlightActiveNav();
}
function highlightActiveNav(){
  const path=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a=>{
    if(a.getAttribute('href')===path)a.classList.add('active');
  });
}

/* ---------------- Scroll Reveal Engine ---------------- */
let revealObserver = null;
function initScrollReveal(){
  if(!('IntersectionObserver' in window)){
    document.querySelectorAll('.reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-zoom').forEach(el=>el.classList.add('active'));
    return;
  }
  revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  },{threshold:0.12, rootMargin:'0px 0px -30px 0px'});
  observeNewReveals();
}

function observeNewReveals(){
  if(!revealObserver) return;
  document.querySelectorAll('.reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-zoom').forEach(el=>{
    if(!el.classList.contains('active')){
      revealObserver.observe(el);
    }
  });
}

/* ---------------- Stats Counter Animation ---------------- */
function initStatsCounter(){
  const statsSection = document.querySelector('.stats');
  if(!statsSection) return;
  let animated = false;
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting && !animated){
        animated = true;
        document.querySelectorAll('.stat h3').forEach(stat=>{
          const text = stat.textContent.trim();
          const match = text.match(/^([\d,]+)(.*)$/);
          if(!match) return;
          const targetNum = parseInt(match[1].replace(/,/g, ''), 10);
          const suffix = match[2];
          const duration = 1600;
          const startTime = performance.now();
          function step(currentTime){
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeProgress * targetNum);
            stat.textContent = current.toLocaleString() + suffix;
            if(progress < 1){
              requestAnimationFrame(step);
            } else {
              stat.textContent = targetNum.toLocaleString() + suffix;
            }
          }
          requestAnimationFrame(step);
        });
      }
    });
  },{threshold:0.2});
  observer.observe(statsSection);
}

/* ---------------- Button Ripple Micro-Interaction ---------------- */
function initButtonRipples(){
  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('.btn');
    if(!btn) return;
    const rect = btn.getBoundingClientRect();
    const span = document.createElement('span');
    span.className = 'ripple-span';
    const diameter = Math.max(rect.width, rect.height);
    span.style.width = span.style.height = `${diameter}px`;
    span.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    span.style.top = `${e.clientY - rect.top - diameter / 2}px`;
    btn.appendChild(span);
    setTimeout(()=>span.remove(), 600);
  });
}

/* ---------------- Modal helpers ---------------- */
function closeModal(id){document.getElementById(id).classList.remove('open');}

/* ---------------- Scroll to top ---------------- */
function initScrollTop(){
  const btn=document.getElementById('scrollTopBtn');
  if(!btn)return;
  window.addEventListener('scroll',()=>{
    btn.classList.toggle('show',window.scrollY>400);
  });
  btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}

/* ---------------- Init on load ---------------- */
document.addEventListener('DOMContentLoaded',()=>{
  initNavbar();
  initScrollTop();
  initScrollReveal();
  initStatsCounter();
  initButtonRipples();
  renderHomeCategories();
  renderFeaturedProducts();
  renderFarmers();
  renderTestimonials();
  initNewsletterForm();
  initShopPage();
  initProductDetailsPage();
  renderCartPage();
  initCheckoutPage();
  initLoginPage();
  initRegisterPage();
  initForgotPasswordPage();
  initContactPage();
});
