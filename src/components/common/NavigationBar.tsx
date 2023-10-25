import Link from "next/link";

export default function NavigationBar() {
  return (
    <>
      <div className="navbar">
        <Link href={"/"} legacyBehavior>
          <a className="item">홈</a>
        </Link>
        <Link href={"https://page.zziri.me"} legacyBehavior>
          <a className="item">블로그</a>
        </Link>
      </div>

      <style jsx>{`
        .navbar {
          background-color: #333;
          color: white;
          padding: 0.5rem;
          text-align: center;
        }

        .item {
          color: white;
          padding: 0.75rem 1.5rem;
          text-decoration: none;
          text-align: center;
          display: inline-block;
        }

        {/* .item:hover {
          background-color: #ddd;
          color: black;
        } */}
      `}</style>
    </>
  );
}