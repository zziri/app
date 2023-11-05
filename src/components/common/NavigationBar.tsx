import Link from "next/link";

export default function NavigationBar() {
  return (
    <>
      <div className="nav-bar">
        <Link href={"/"} legacyBehavior>
          <a className="link-item">홈</a>
        </Link>
        <Link href={"https://page.zziri.me"} legacyBehavior>
          <a className="link-item">블로그</a>
        </Link>
      </div>

      <style jsx>{`
        .nav-bar {
          background-color: #333;
          color: white;
          padding: 0.5rem;
          text-align: center;
        }

        .link-item {
          color: white;
          padding: 0.5rem 1.5rem;
          text-decoration: none;
          text-align: center;
          display: inline-block;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}
