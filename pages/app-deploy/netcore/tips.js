import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>توضیحات و نکات تکمیلی در برنامه‌های .Net Core - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="netcore" />
      <div className="page-title">
        <h1>پلتفرم .Net</h1>
        <span className="page-description">(.Net Platform)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#dotnet-version">انتخاب نسخه‌ی ASP.Net Core</a>
      </li>
      <li>
        <a href="#app-settings">تنظیمات مرتبط با ساختار برنامه</a>
      </li>
      <li>
        <a href="#bad-gateway">رفع خطای 502 Bad Gateway</a>
      </li>
      <li>
        <a href="#timezone">تنظیم منطقه‌ی زمانی (TimeZone)</a>
      </li>
      <li>
        <a href="#cors">رفع خطای CORS</a>
      </li>
    </ul>

    <h3 id="dotnet-version">انتخاب نسخه‌ی ASP.Net Core</h3>
    <p>
      به‌صورت پیش‌فرض، برنامه‌ی شما روی نسخه‌ی ۳.۱ این پلتفرم اجرا می‌شود.
      می‌توانید داخل فایل <span className="code"> liara.json</span>
      نسخه‌ی مدنظرتان را به شکل زیر تعیین کنید. سپس بعد از یک بار دیپلوی،
      برنامه‌ی شما روی نسخه‌ی تعیین شده اجرا خواهد شد.
    </p>
    <pre>
      <code>
        {`{
  "netcore": {
    "version": "6.0"
  }
}`}
      </code>
    </pre>
    <p>در حال حاضر، از نسخه‌های زیر پشتیبانی می‌کنیم:</p>
    <ul>
      <li>7.0</li>
      <li>
        6.0 <strong>(LTS)</strong>
      </li>
      <li>5.0</li>
      <li>
        3.1 <strong>(LTS)</strong> (پیش‌فرض)
      </li>
      <li>3.0 (EOL)</li>
      <li>2.2 (EOL)</li>
      <li>2.1 (EOL)</li>
    </ul>

    <Notice variant="warning">
      EOL مخفف عبارت END OF LIFE و به‌معنای پایان عمر یک نسخه است بنابراین
      باوجود پشتیبانی از نسخه‌های EOL در لیارا توصیه می‌کنیم پروژه‌هایتان را به
      نسخه‌های جدیدتر ارتقا دهید.
    </Notice>

    <h3 id="app-settings">تنظیمات مرتبط با ساختار برنامه</h3>
    <p>
      لیارا به صورت خودکار سعی می‌کند که تنظیمات مناسب برنامه‌ی شما را تشخیص دهد
      و برنامه‌ی شما را در بهترین حالت مستقر کند. اما با توجه به تنوع ساختار
      برنامه‌های ASP.Net Core، ممکن است که برخی از این تشخیصات خودکار با مشکل
      مواجه شوند و لیارا نتواند برنامه‌ی شما را به درستی مستقر کند.
    </p>
    <p>در چنین حالاتی ممکن است با خطاهایی مانند خطای زیر روبه‌رو شوید:</p>
    <pre>
      <code>
        {`It was not possible to find any installed .NET Core SDKs
Did you mean to run .NET Core SDK commands? Install a .NET Core SDK from:
https://aka.ms/dotnet-download`}
      </code>
    </pre>

    <p>
      این امکان برای شما فراهم شده که به جای اتکا به قابلیت تشخیص خودکار لیارا،
      پارامترهای مورد نیاز برای استقرار برنامه‌ی‌تان را خودتان تعریف کنید. این
      کار به کمک تعریف فایل
      <span className="code">liara.json</span>
      در ریشه‌ی برنامه‌تان امکان‌پذیر است.
    </p>
    <Highlight className="json">
      {`{
  "platform": "netcore",
  "netcore": {
    "finalDllName": "MyProjectName",
    "csprojectFile": "path/to/folder/my.csproj"
  }
}`}
    </Highlight>
    <p>
      <ul>
        <li>
          <span className="code">finalDllName</span>: نام فایل{" "}
          <span className="code">.dll</span>
          نهایی برنامه که بعد از بیلدکردن ساخته می‌شود. (بدون پسوند)
        </li>
        <li>
          <span className="code">csprojectFile</span>: مسیر فایل{" "}
          <span className="code">.csproj</span>
          اصلی برنامه. (به صورت نسبی وارد شود)
        </li>
      </ul>
    </p>

    <h3 id="timezone">تنظیم منطقه‌ی زمانی (TimeZone)</h3>
    <p>
      منطقه‌ی زمانی در برنامه‌های ASP.Net Core به‌طور پیش‌فرض بر روی Asia/Tehran
      تنظیم شده است اما شما می‌توانید منظقه‌ی زمانی برنامه‌ی خود را با استفاده
      از پارامتر <span className="code">timezone</span> در فایل{" "}
      <span className="code">liara.json</span> تغییر دهید:
    </p>

    <Highlight className="json">
      {`{
  "platform": "netcore",
  "app": "dotnets-starter",
  "netcore": {
    "timezone": "America/Los_Angeles"
  }
}`}
    </Highlight>

    <h3 id="bad-gateway">رفع خطای 502 Bad Gateway</h3>
    <p>
      در صورتی که فرایند استقرار برنامه‌ی‌تان موفقیت‌آمیز بوده اما خطای 502 را
      در خروجی مشاهده می‌کنید، به‌احتمال زیاد مشکل از URL ای است که داخل
      سورس‌کدتان تنظیم و شخصی‌سازی کرده‌اید.
    </p>
    <p>
      به‌صورت پیش‌فرض، برنامه‌های ASP.Net Core روی آدرس
      <span className="code">http://0.0.0.0:80</span>
      اجرا می‌شوند. اگر شما این آدرس را برای مثال به
      <span className="code">http://localhost:5000</span>
      تغییر داده باشید، خطای 502 را مشاهده خواهید کرد.
    </p>
    <p>
      در این صفحه‌ی{" "}
      <a href="https://stackoverflow.com/a/37349873/6390238" target="_blank">
        StackOverflow
      </a>
      ، می‌توانید راه‌حل‌های متنوعی که برای حل این مسئله گفته شده را مشاهده
      کنید. به‌طور خلاصه، باید در فایل
      <span className="code">Program.cs</span>، از متد
      <span className="code">.UseUrls</span>
      استفاده کنید:
    </p>
    <pre>
      <code>.UseUrls("http://0.0.0.0:5000");</code>
    </pre>
    <p>
      همان‌طور که مشاهده می‌کنید، localhost را باید به 0.0.0.0 تغییر دهید. حالا
      برای استقرار این برنامه، باید از دستور
      <span className="code">liara deploy --port 5000</span>
      استفاده کنید تا لیارا بداند که برنامه‌ی شما قرار است روی پورت 5000 اجرا
      شود.
    </p>
    <h3 id="cors">رفع خطای CORS</h3>
    <p>
      در برنامه‌های ASP.Net Core به‌روش‌های مختلفی می‌توانید CORS را فعال‌سازی
      کنید اما درصورتی که با خطای CORS مواجه شده‌اید بایستی Origins و یا Methods
      تنظیم شده را مجدد مورد بررسی قرار دهید:
    </p>
    <Highlight className="c#">{`builder.Services.AddCors(options =>
{
  options.AddPolicy(name: "MyPolicy",
    builder =>
    {
      builder.WithOrigins("https://example.com",
                          "https://subdomain.example.com")
              .WithMethods("PUT", "DELETE", "GET");
    });
});`}</Highlight>
    <p>
      برای کسب اطلاعات بیشتر می‌توانید{" "}
      <a
        href="https://docs.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-5.0#enable-cors-1"
        target="_blank"
        rel="noopener"
      >
        مستندات رسمی
      </a>{" "}
      این فریم‌ورک را مطالعه کنید.
    </p>
  </Layout>
);
