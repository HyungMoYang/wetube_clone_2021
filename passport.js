import passport from "passport";
import GithubStrategy from "passport-github";
import routes from "./routes";
import { githubLoginCallback } from "./controllers/userController";
import User from "./models/User";

// local Strategy
passport.use(User.createStrategy());

// github Strategy
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((id, done) =>
  User.findById(id, (err, user) => done(err, user))
);

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
