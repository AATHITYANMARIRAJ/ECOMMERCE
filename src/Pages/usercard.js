import './card.css';
import Mani from './mani.jpg';
export default function card(){
    return(
      <div className="pcard">
        <div className="pcard1">
          <p><h1>PROFILE</h1>
          <br></br><br></br>

           <img src={Mani} className='pimg'></img>
           <br></br><br></br>
           Hi maniratnam!!!
           <br></br>
           <br></br>
           <br></br>
           <b>Name:- Mani Ratnam</b>
           <br></br><br></br><br></br><br></br>
           <b>Designation:- Dealer</b>
           <br></br><br></br><br></br><br></br>
           <b>Joined since 2006!!</b>

           <br></br><br></br><br></br><br></br>
           <b>Thanks for choosing trendify</b>
          </p>

          </div>
           

          <div class="main1">
            <div class="main2">
              <h1>ORDER STATUS</h1>
            </div>
          </div>
         

          </div>
      
    );
};