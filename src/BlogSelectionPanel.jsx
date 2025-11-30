import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Place your full blog content (as plain text) in the fields below.
const BLOGS = [
 {
    title: "My First 60 Days in Ireland",
    content: `
 (aka: How Reality Slapped Me Cold , But I Still Love It)
 Before coming to Ireland, I had a full Bollywood fantasy playing in my head.
 I imagined myself studying with students from all over the globe, travelling every weekend,
 getting a part-time job in a few weeks, and living my “international student” dream life.
 Then Ireland opened the door and said:
 “Welcome. Please prepare for plot twist.”
 Expectation #1: A truly international class
 I thought every classroom discussion would sound like the UN General Assembly , different
 accents, cultures, everything.
 Reality:
 Delhi 2.0 with Irish professors.
 Half of my class is Indian, and it sometimes feels like we could celebrate Diwali right there in the
 lecture hall.
 But it also feels familiar , people understand my jokes, slang, stress, everything.
 Expectation #2: Weekend travels everywhere
 I imagined myself travelling so much I’d forget what my room looked like.
 Reality:
 My bank account politely said, “No.”
 My longest trips are to the kitchen, Lidl, and Tesco on special occasions.
 But Ireland is beautiful , beaches, mountains, landscapes , and I can’t wait to explore more once
 my budget stops crying.
 Expectation #3: I will quickly get a part-time job
 I came confidently, thinking jobs would chase me.
 Reality:
Indeed: rejected.
 LinkedIn: rejected.
 Walk-ins: “We’ll call you.” (They won’t.)
 Two months later , zero jobs, plenty of character development.
 Still trying. Still hoping.
 Expectation #4: Cold weather will be fun
 After surviving Delhi summers, I thought Irish cold would be refreshing.
 Reality:
 This is not cold. This is disrespectful weather.
 Wind that moves you. Rain that attacks you. Temperatures that question your life decisions.
 But I’m slowly adjusting.
 Expectation #5: Independent living will be glamorous
 Back home, food was ready, clothes were washed, house was clean, family was there.
 Reality:
 I am the chef, cleaner, laundry guy, budget planner, therapist, and motivational speaker.
 Some days I feel strong, some days I cry over onions. Some days I miss home badly , and that’s
 okay.
 But Here’s the Truth…
 Even with all the challenges, the cold, the job struggle, and the chaos , I’m enjoying my life here.
 I miss my parents and friends in India a lot, but I’m grateful for this experience.
 Ireland is beautiful.
 The beaches, the landscapes, the greenery , it’s peaceful like nothing I’ve seen before.
 Ireland feels safe , most of the time.
There are occasional moments of racism, but 90% of people are extremely kind and treat you with
 respect.
 And the education?
 It's 10 times more modern than India , interactive, digital, practical, and focused on real thinking.
 I’m happy with my decision to come here.
 The chaos, struggle, loneliness, growth , I’m loving all of it.
 I’m not living the fantasy I imagined , I’m living something real, challenging, and meaningful.
 And honestly? This version is even better
    `
  },
  {
    title: "Why Moving Abroad Feels Like Restarting Life on Level 1",
    content: `
 (aka: The “New Game, Hard Mode” of Life)
 Moving abroad is exciting, thrilling, and terrifying , often all at the same time. You leave behind
 your home, your friends, your family, and everything familiar… only to realize that life abroad is like
 hitting “Restart” on Level 1, except there are no cheat codes.
 Everything Feels Brand New
 Back home, you knew your way around: streets, shops, people, even hidden shortcuts. You knew
 how things worked, who to call for help, and how to solve problems.
 Abroad? Everything is new. The streets confuse you, the shops have different names, and even
 ordering food can feel like a small mission. Suddenly, you’re learning life again , every day feels
 like a tutorial level.
 You’re Responsible for Everything
 Back home, your family handled a lot for you: meals, laundry, cleaning, bills.
 Now? You are it. You cook, clean, shop, pay bills, and figure out public transport , all while
 managing studies or work. Some days you feel like a superhero; other days you just want to cry into
 your noodles. Independence is empowering, but it also comes with a LOT of trial and error.
 The Social Game Is Hard Mode
 Making friends abroad isn’t automatic. Everyone is adjusting, everyone has their own life, and
 sometimes cultural differences make simple things tricky.
 You’re essentially rebuilding your social circle from scratch. The first few months are awkward,
 confusing, and sometimes lonely , but once you find your people, it feels like unlocking a secret
 bonus level.
 You Question Yourself Constantly
 Everything abroad comes with comparison. You meet students who are more experienced, more
 confident, or more prepared than you. You see people thriving while you’re struggling to figure out
 where the nearest supermarket is.
 It’s easy to feel small, but slowly, you realize: everyone starts somewhere. Life abroad teaches
 patience, resilience, and self-belief.
 Small Wins Feel HUGE
 The first time you figure out a bus route, cook a decent meal, or submit an assignment on time
 without panicking , it feels like you just defeated a boss.
Every small victory is a reminder that even Level 1 has challenges worth celebrating.
 Conclusion: Level 1 Isn’t a Setback , It’s a Start
 Yes, moving abroad feels like starting over. You are on Level 1 again. But that’s not a bad thing.
 It’s a chance to learn, grow, and rebuild your life on your own terms. It’s a chance to become
 independent, resilient, and confident.
 The first few months are hard, awkward, and chaotic. But every day, you gain experience points.
 And eventually, you’ll look back and realize you’ve unlocked levels you never thought possible.
 Life abroad isn’t just moving , it’s leveling up in the hardest, most rewarding game ever
    `
  },
  {
    title: "What No One Tells You About Studying in Ireland",
    content: `
Applying to study in Ireland sounded glamorous on paper , until I realized it’s actually a
 time-consuming and exhausting process. Preparing for IELTS, collecting documents, filling forms ,
 it took me six months. Six months of stress, coffee, and panic Googling. And then came the waiting
 game: visa, confirmation letters, and emails you check every five minutes.
 The moment you finally hold all the documents in your hands… every sleepless night, every
 stress-filled day disappears. It’s like magic.
 Shopping for Ireland: Everyone Has an Opinion
 Next, comes packing advice. Everyone has something different to say:- “Bring lots of winter clothes!”- “Nah, clothes are cheap there, just bring kitchen stuff.”- “No, everything’s available there, don’t bother with kitchen supplies at all.”
 So I did what every sane person would do , panicked, packed everything I could, and prayed for
 the best.
 Finding Accommodation: The Real Mission Impossible
 Here’s a secret: you can’t leave the airport until you’ve sorted your lodging.
 I was lucky. My cousin and some friends were already in Ireland, and their help was priceless. But
 finding student accommodation near campus is almost impossible. Most students end up living a
 little farther away, which means learning the fine art of travelling economically , balancing money,
 time, and patience while navigating buses in the freezing cold.
 Starting Classes: Cue the Inferiority Complex
 Then classes begin. And suddenly, you’re in a classroom with students from all over the world ,
 intelligent, confident, and way more experienced than you.
 It’s intimidating. I won’t lie , the inferiority complex hits hard. But slowly, you realize everyone has
 their own pace. You start learning, growing, and even appreciating how much this experience is
 shaping you.
 Life at Home vs Life Abroad: The Real Independence Test
 After class, reality strikes: there’s no mom to cook, no family to do your laundry, no one to magically
 clean your room.
You are now:- Chef- Cleaner- Laundry expert- Grocery shopper- Emotional support system (to yourself)
 Some days you cook like a pro.
 Some days you survive on instant noodles.
 Some days you cry because you miss your parents and friends.
 And that’s the beauty of it , you learn independence, resilience, and responsibility in ways that
 nothing back home could teach you.
 The Sweet Parts That Make It Worth It
 Despite all the chaos, the cold, and the occasional loneliness, I’m enjoying my life here.
 The landscapes, beaches, and quiet streets are breathtaking.
 Most people are incredibly kind , polite, helpful, and respectful. Sure, there are rare moments of
 racism, but 90% of the people make you feel human and welcome.
 The education? Ten times more modern than India. Interactive classes, digital systems, and a focus
 on critical thinking , it’s challenging, but it’s exactly what I wanted.
 Conclusion
 Studying in Ireland isn’t just Instagram photos and cozy cafes. It’s stress, struggle, growth, and
 chaos.
 Yes, I miss my parents and friends.
 Yes, the weather is aggressive.
 Yes, finding jobs and accommodation can be a headache.
 But I’m happy with my decision. I’m growing, learning, and adapting , and slowly falling in love
 with this beautiful chaos called life abroad.
And honestly? This is better than any fantasy I imagined
    `
  },
  {
    title: "Kashmiri Pandit Culture",
    content: `
Kashmiri Pandit Culture – A Legacy Worth 
Preserving 
Kashmiri Pandit culture is one of the most unique and beautiful cultures in the world, yet 
sadly, much of it is slowly being forgotten. As the last generations who lived in the Valley, 
many of us did not get the chance to experience our culture in its full richness , the 
language, the rituals, the customs , and much of it is no longer practiced as it once was. 
1. Festivals Like No Other 
Kashmiri Pandit festivals are distinct from the rest of India. From Herath (Shivratri) to 
Navreh, every celebration has a deep spiritual and cultural significance. 
• Herath: A night-long celebration of Lord Shiva with unique rituals, fasting, and 
ceremonial offerings. 
• Navreh: The New Year is celebrated with special prayers, local delicacies, and 
offerings to nature. 
Even though these festivals are ancient, they are celebrated differently than in mainstream 
India, making them a treasure of our heritage. 
2. Food with Logic and Mythology 
Kashmiri Pandit cuisine is famous for being non-vegetarian, but it’s not just for taste. 
• Scientific logic: Non-veg meals provide protein and energy needed for the cold 
climate of Kashmir. 
• Mythological logic: Certain rituals and offerings require meat, keeping ancient 
spiritual practices intact. 
Our food, like our festivals, blends practical wisdom with cultural depth. 
3. Weddings: A Divine Celebration 
Kashmiri Pandit weddings are entirely different from mainstream Indian weddings. 
• The groom is treated as Lord Shiva, and the bride as Maa Shakti. 
• Every ritual symbolizes the cosmic balance between divine masculine and feminine 
energies. 
• Weddings are deeply spiritual, blending mythology, tradition, and community 
celebration. 
4. Resilience Through History 
The turmoil of 1990 forced every Kashmiri Pandit to start life from level one , leaving 
homes, careers, and everything familiar. 
Yet today, we have reached new heights in education, careers, and cultural preservation. 
This resilience and ability to rebuild is a testament to the spirit of Kashmiri Pandits. 
5. The Kashmiri Pandit Personality 
Kashmiri Pandits are soft-spoken, sensible, and thoughtful. 
You will rarely see a Kashmiri Pandit fight or raise their voice unnecessarily. There’s a calm 
wisdom in our community , a combination of deep learning, tradition, and respect for life. 
Conclusion 
Kashmiri Pandit culture is a beautiful, intricate tapestry of rituals, festivals, food, and 
wisdom. Though much of it is fading, it remains a source of identity, pride, and 
inspiration. 
From our unique festivals to our spiritual weddings, from our cuisine to our resilience, 
Kashmiri Pandits are keepers of a legacy that the world should never forget. 
We are a people who have survived upheaval, preserved knowledge, and still embody 
grace, humility, and wisdom , truly a culture worth celebrating and preserving.
    `
  },
  {
    title: "Spiritual Learning in Kashmir",
    content: `
Kashmir is famous not only for its breathtaking landscapes but also for its ancient spiritual 
traditions. Among these, Kashmir Shaivism stands out as a deeply philosophical and 
mystical path that blends ritual, meditation, and self-awareness. 
For centuries, Kashmiri Pandits have preserved this spiritual heritage, making it one of the 
most unique and profound systems of learning in the world. 
1. What is Kashmir Shaivism? 
Kashmir Shaivism is a branch of Hindu philosophy that focuses on Shiva as the supreme 
consciousness , the source and essence of the universe. Unlike other Shaivite traditions, it 
emphasizes: 
• Recognition of the self as divine 
• Integration of spirituality into daily life 
• Meditation and ritual as tools for self-realization 
It’s not just philosophy; it’s a practical guide to living with awareness and consciousness. 
2. Rituals and Practices 
Rituals play a central role in Kashmiri spiritual life. Some of the key practices include: 
• Herath (Shivratri): A night-long fasting and vigil to worship Lord Shiva, with 
ceremonial offerings and prayers. 
• Daily Puja: Even in homes, families maintain small altars for daily prayers, often 
accompanied by mantras and devotional songs. 
• Seasonal Offerings: Specific rituals mark different seasons, connecting humans with 
nature and the cosmic rhythm. 
These rituals are not mere formalities; they are meant to align the mind, body, and soul 
with universal consciousness. 
3. Meditation and Inner Learning 
Beyond rituals, Kashmir Shaivism emphasizes self-reflection, meditation, and experiential 
learning. 
• Texts by scholars like Abhinavagupta explore consciousness, aesthetics, and the 
unity of life. 
• Spiritual practices include yoga, pranayama, and contemplation to awaken inner 
awareness. 
• Learning is experiential, meaning knowledge is gained through practice and self
realization rather than just reading. 
4. Integration of Spirituality and Life 
One of the most unique aspects of Kashmiri Shaivism is that spirituality is not separate 
from daily life. 
• Work, family, and community are all seen as part of spiritual practice. 
• Art, music, and poetry are infused with spiritual meaning. 
• Every action, when performed mindfully, is a step toward self-realization. 
This holistic approach ensures that spiritual learning is practical and life-affirming. 
5. Modern Relevance 
Even today, these teachings are highly relevant. They encourage: 
• Self-awareness and mindfulness 
• Harmony with nature and community 
• Inner balance and resilience 
Kashmir Shaivism shows that spirituality is not about renunciation alone but about living 
fully with consciousness, purpose, and devotion. 
Conclusion 
Spiritual learning in Kashmir is a journey of ritual, meditation, and inner awakening. It is 
deeply rooted in tradition but remains timeless and practical, offering tools for anyone 
seeking a deeper understanding of life and consciousness. 
Through its rituals, philosophy, and emphasis on experiential learning, Kashmir Shaivism 
continues to guide generations toward self-realization and harmony with the universe.    `
  },
];

export default function BlogSelectionPanel() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="blog-panel">
      <h2 className="blog-panel-title">Blog & Story Library</h2>
      <div className="blog-selection-list">
        {BLOGS.map((blog, idx) => (
          <motion.button
            className={`blog-selector${activeIndex === idx ? " active" : ""}`}
            key={idx}
            onClick={() => setActiveIndex(idx)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            {blog.title}
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="blog-content-frame"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.35 }}
            key={activeIndex}
          >
            <button
              className="blog-close-btn"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
            >
              ×
            </button>
            <article className="blog-content-article">
              <h3 className="blog-open-title">{BLOGS[activeIndex].title}</h3>
              <div className="blog-divider"></div>
<div className="blog-content-text">
  {BLOGS[activeIndex].content.split('\n').map((line, i) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("# ")) { // H1
      return <h2 className="blog-h2" key={i}>{trimmed.slice(2)}</h2>;
    }
    if (trimmed.startsWith("## ")) { // H2
      return <h3 className="blog-h3" key={i}>{trimmed.slice(3)}</h3>;
    }
    if (/^\d+\.\s/.test(trimmed)) { // numbered list
      return <li className="blog-li" key={i}>{trimmed.replace(/^\d+\.\s/, "")}</li>;
    }
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) { // bullet list
      return <li className="blog-li" key={i}>{trimmed.slice(2)}</li>;
    }
    if (trimmed === "") { // blank line = space
      return <div key={i} style={{height: 10}} />;
    }
    // normal paragraph
    return <p key={i}>{trimmed}</p>;
  })}
</div>

            </article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
