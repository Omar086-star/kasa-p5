import React from 'react'
import "./Article.css"
import { Link } from 'react-router-dom';
function Article() {
return (
<div className='article_appartement'>


  

<div className='appartement'>

<Link to={"/Flat"}> <h4 className='titreLocation'> Titre de location</h4>  </Link>


</div>

<div className='appartement'>
<Link to={"/Flat"}> <h4 className='titreLocation'> Titre de location</h4>  </Link>
</div>

<div className='appartement'>
<Link to={"/Flat"}> <h4 className='titreLocation'> Titre de location</h4>  </Link>
</div>

<Link to={"/Flat"}> 
<div className='appartement'>
<Link to={"/Flat"}> <h4 className='titreLocation'> Titre de location</h4>  </Link>
</div>
</Link>
</div>
)
}
export default Article;