import GithubLogin from "@/components/GithubLogin";
import GoogleLogin from "@/components/GoogleLogin";

const Auth = () => {
  return (
    <>
      <GoogleLogin />
      <GithubLogin />
    </>
  );
};

export default Auth;
