export default function Page() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
        <h2>Question 2</h2>
        <h3>Subject: Understanding Fluid Compute for Your Team</h3>
  
        <p>Hi Trevor,</p>
  
        <p>
          Appreciate you reaching out! I know you’re looking for a clear way to explain Fluid Compute to your CTO,  
          so I’ll keep this direct and relevant to your AI playlist project.
        </p>
  
        <h4 style={{ marginTop: "20px" }}>What is Fluid Compute?</h4>
        <p>
          It’s Vercel’s flexible approach to running server-side code—similar to Functions, but without the cold starts and idle inefficiencies.  
          It allows multiple requests at once, making it ideal for AI-heavy workloads.  
          <a href="https://vercel.com/blog/introducing-fluid-compute" target="_blank" rel="noopener noreferrer"> Here’s a deeper look</a>.
        </p>
  
      
        <p>
          Think of it like making tea. With traditional serverless, every request is like boiling water from scratch,  
          steeping a new bag, and waiting for it to be ready, which takes some time.  
          Fluid Compute? You’ve already brewed a pot, and now you’re just pouring a fresh cup, instant results with less wait time.  
          That means faster response times and better efficiency, especially for AI tasks like playlist generation.
        </p>
  
        <h4 style={{ marginTop: "20px" }}>Why This Matters for Your AI Playlists</h4>
        <ul>
          <li>Lower latency and costs by reusing compute instead of constantly spinning up new instances.</li>
          <li>Seamlessly integrates with Next.js App Router to keep recommendations responsive.</li>
          <li>Reduces infrastructure overhead, so your team can focus on building, not managing servers.</li>
        </ul>
  
    
        <p>
          The best way to showcase impact? Test a small AI function on Fluid Compute and compare response times to your current setup.  
          That way, you’ll have actual data to bring back instead of just an explanation.  
          I can also share case studies on how teams are cutting AI infrastructure costs.
        </p>
  
        <p>
          Let me know what works best for you, happy to hop on a quick call or send more details over email. Looking forward to your thoughts!
        </p>
  
        <p>Warm regards,</p>
        <p>Taylor</p>
      </div>
    );
  }
  