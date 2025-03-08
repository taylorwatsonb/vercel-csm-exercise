export default function Q4() {
    return (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", lineHeight: "1.6" }}>
       
        <p>
          I’ve been digging into Core Web Vitals lately, and they’re a big deal for making sure enterprise websites—like the ones you’d host on Vercel—feel snappy, rank well on search engines, and keep users happy. I put together a quick video to break it all down, so check it out!
        </p>
        <p>
          You can watch my 3-7 minute video on Core Web Vitals here: <br />
          <a href="https://www.loom.com/share/d1edfe3567ad41edbaa05f973f265274?sid=f6d1ad3d-b05b-4613-be29-7f0d18794b69">
            https://www.loom.com/share/d1edfe3567ad41edbaa05f973f265274?sid=f6d1ad3d-b05b-4613-be29-7f0d18794b69
          </a>
        </p>
        <p>
          In the video, I walk through a PageSpeed Insights analysis of a popular retail site (you can check the link they gave us!). Here’s a quick recap of what I found, plus some tips to make things even better:
        </p>
        <p>
          - Biggest Wins to Tackle:<br />
          - Optimize Images: Shrink those big pics to speed up loading. Vercel’s got a solid guide for this: <a href="https://vercel.com/docs/concepts/image-optimization">https://vercel.com/docs/concepts/image-optimization</a>.<br />
          - Cut Down on Clutter: Less CSS and JavaScript can stop those annoying page shifts. Next.js has some neat tricks here: <a href="https://nextjs.org/docs/app/building-your-application/optimizing">https://nextjs.org/docs/app/building-your-application/optimizing</a>.<br />
          - Keep an Eye on Things: Use Vercel Analytics to track progress. Check it out: <a href="https://vercel.com/docs/platform/usage">https://vercel.com/docs/platform/usage</a>.
        </p>
        <p>
          I pulled these ideas from the PageSpeed Insights report and some digging into Vercel docs—pretty cool stuff! If you want to chat more or need a hand with any of this, just let me know. I’m all ears!
        </p>
        <p>Taylor</p>
      </div>
    );
  }