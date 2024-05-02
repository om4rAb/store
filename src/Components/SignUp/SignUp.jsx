import Header from "../Header/Header";
import "./SignUpStyle.css";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <>
      <Header />

      <div className="divsignup">
        <div className="Sign-up-container">
          <h3>Create your account easly</h3>
          <i>Already in ? <Link to="signIn"> Sign in</Link></i>

          <form className="Sign-up-form">
            <label htmlFor="">Full name</label>
            <input type="text" placeholder="Jhone wicke" />

            <label htmlFor="">Email</label>
            <input type="text" placeholder="somone@gmail.com" />

            <label htmlFor="">Password</label>
            <input type="text" placeholder="Password" />

            <label htmlFor="">Confirm Password</label>
            <input type="text" placeholder="Password" />

            <input type="button" value="Create account" />
          </form>
        </div>

        <div className="benefit-div">

          <div>
            <h2>Benifits of creating an account on MATALAN</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, id
              culpa. Qui quae eum consectetur eaque ipsum fugit sunt, repellat
              ratione tempora voluptatem! Nulla doloremque perferendis deserunt,
              quia exercitationem autem.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sunt porro distinctio aliquid quam magnam nulla debitis, natus ea exercitationem odit numquam, libero, magni quia vel voluptatum mollitia tenetur totam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor est suscipit exercitationem facilis labore vitae laboriosam necessitatibus sunt quod sapiente, libero atque, accusantium vero. Impedit dicta quo vel porro excepturi!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus accusamus quod ex, debitis saepe ipsa in labore illo, architecto eius laboriosam non animi corporis ipsam, nisi maxime suscipit sit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat debitis numquam molestiae necessitatibus cum earum ab, et iusto illo totam temporibus minima voluptatum, molestias, laborum blanditiis asperiores consequatur nostrum?
            </p>
          </div>
        
      
        </div>
      </div>
    </>
  );
}
