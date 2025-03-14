import { PromptBuilder } from "@/components/prompt-builder/prompt-builder";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header 
        style={{ 
          background: "linear-gradient(to right, #2563eb, #9333ea)", 
          color: "white",
          padding: "2rem 0",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Midjourney Prompt Generator</h1>
          <p style={{ marginTop: "0.5rem", fontSize: "1.125rem" }}>Create engaging, powerful prompts for AI image generation</p>
        </div>
      </header>
      
      <main style={{ flex: "1 1 auto", maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
        <PromptBuilder />
      </main>
      
      <footer style={{ 
        backgroundColor: "#f3f4f6", 
        padding: "1.5rem 0", 
        borderTop: "1px solid #e5e7eb"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem", textAlign: "center", color: "#6b7280" }}>
          <p>Midjourney Prompt Generator • Designed to help you create amazing AI art</p>
        </div>
      </footer>
    </div>
  );
}
