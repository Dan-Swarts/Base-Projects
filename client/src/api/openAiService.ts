interface referralInformation {
  company: string;
  jobPosting: string;
  person: string;
  conversationHistory: string;
}

class OpenAiService {
  async generateConversation(referralInformation: referralInformation) {
    const response = await fetch("/ai/conversation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: referralInformation }),
    });

    const conversations: any = await response.json();
    return conversations.formattedResponse;
  }
}

export default new OpenAiService();
