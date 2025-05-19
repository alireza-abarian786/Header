import React from "react";

export default function HeaderContent() {
  return (
    <div className="header-bottom">
      <div className="header-bottom-left" style={{ alignItems: "center" }}>
        <h1 className="title">
          <span> بهترین آموزش </span> <br />
          <span> و نرم افزار آموزشی </span> <br />
          <span> در کل جهان </span>
        </h1>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی موتری را برای
          طراحان رایانه دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <form action="./courses.html" style={{ justifyContent: "center" }}>
          <input type="text" placeholder="چه آموزشی نیاز دارید" />
          <a href="/courses">کلیک کنید</a>
        </form>
      </div>

      <div className="header-bottom-right">
        <img src="header-1.jpg" alt="" className="" />
        <img src="header-2.jpg" alt="" />
        <div className="text-img">
          <ul>
            <li className="text-white">تخفیف %30 دوره های این ماه</li>
            <li className="text-white">تمرین های مکمل</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
