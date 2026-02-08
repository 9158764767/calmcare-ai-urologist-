import type { Message } from '../constants';

export async function getMockResponse(history: Message[]): Promise<string> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const lastUserMessage = history[history.length - 1].content.toLowerCase();

    // Simple keyword matching to simulate the persona
    if (lastUserMessage.includes('scared') || lastUserMessage.includes('anxious') || lastUserMessage.includes('nervous')) {
        return "It is completely normal to feel scared. Many patients likely feel the same way. Take a deep breath. You are in good hands with your medical team. Would you like to know more about what happens during the procedure to help you feel more prepared?";
    }

    // Surgery / Procedure handling
    if (lastUserMessage.includes('surgery') || lastUserMessage.includes('operation') || lastUserMessage.includes('urs') || lastUserMessage.includes('eswl') || lastUserMessage.includes('laser')) {
        return "Kidney stone surgeries like Ureteroscopy (URS) or Shock Wave Lithotripsy (ESWL) are very common and effective.\n\n**Common Procedures:**\n- **ESWL:** Uses sound waves to break stones.\n- **URS:** A small scope removes the stone (no cuts).\n- **PCNL:** For very large stones.\n\nMost patients go home the same day! *Disclaimer: I am an AI, not a doctor.*";
    }

    // Size handling (7mm, 5mm, etc)
    if (lastUserMessage.includes('mm') || lastUserMessage.includes('size') || lastUserMessage.includes('cm')) {
        return "**About Stone Size:**\n- **Small (<5mm):** Often pass on their own with water + meds.\n- **Medium (5-10mm):** (Like your 7mm stone) Might pass, but often needs help (ESWL or URS) if it gets stuck.\n- **Large (>10mm):** Usually requires surgery.\n\nA 7mm stone typically takes a few weeks to pass if it moves, but your doctor might recommend removal to be safe.";
    }

    // Symptoms (Blood, Urine, Pain)
    if (lastUserMessage.includes('blood') || lastUserMessage.includes('urine') || lastUserMessage.includes('red') || lastUserMessage.includes('burn')) {
        return "**Blood in Urine (Hematuria):**\nThis is very common when a stone moves and scratches the lining of your kidney or ureter. It can look alarming (pink/red) but is usually expected.\n\n🔴 **When to worry:** If you also have a fever (>101°F), chills, or unbearable pain, go to the ER immediately.";
    }

    // Pain
    if (lastUserMessage.includes('pain') || lastUserMessage.includes('hurt') || lastUserMessage.includes('ache')) {
        return "Pain is the most difficult part of kidney stones. Your doctor can prescribe NSAIDs or stronger pain relief.\n\n**Tip:** A hot shower or heating pad on your flank (side) can really help relax the muscles and reduce pain.";
    }

    // Diet / Precaution
    if (lastUserMessage.includes('eat') || lastUserMessage.includes('drink') || lastUserMessage.includes('diet') || lastUserMessage.includes('water')) {
        return "**Hydration is Key!** 💧\n- Drink 3-4 liters of water daily.\n- Add lemon/lime juice (citrate helps prevent stones).\n- Limit salt and animal protein.\n\nStaying hydrated is the #1 way to flush stones and prevent new ones!";
    }

    return "I understand. I'm here to support you. You can ask me about:\n- Stone sizes (e.g., 'Is 7mm big?')\n- Surgery types (ESWL, URS)\n- Symptoms (Blood, Pain)\n- Diet & Recovery\n\n*Note: I am currently in Demo Mode.*";
}
