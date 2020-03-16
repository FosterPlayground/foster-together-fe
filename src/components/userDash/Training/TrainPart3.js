import React, { useState } from 'react'
import {
  Page,
  BigTitle,
  Header2,
  Section2,
  MainContent,
  Image2,
  BigInput,
  Input,
  Submit,
  ATag,
  Header,
  Footer,
  Half,
  Image3,
  Link,
  InputHolder,
} from './TrainStyle'
import Player from 'react-player'
import 'react-animated-slider/build/horizontal.css'
import Stepper from './TrainingStepper'
import Card from './Card'

export default function TrainingThree(props) {
  const [section, setSection] = useState(1)
  return (
    <>
      <Page>
        <BigTitle> THREE: WHAT YOU NEED TO KNOW</BigTitle>
        <Player url='https://player.vimeo.com/video/288657927' />
        <Section2>
          <Header>WHAT'S YOUR VISION OF A FOSTER FAMILY?</Header>
          <MainContent>
            Helpers are often surprised when they meet their foster parent
            match. As humans, we tend to make assumptions about what a “type”
            might look like, and it’s best when we leave room to be pleasantly
            surprised by reality. For example, here are a few of the massive
            variations in foster families: <br />
            1. They don’t feel like they possess a super-human strength. They
            feel pretty average, just as most parents do at the end of a long
            day. Personality types can influence anyone’s affect and energy
            level.
            <br />
            2. Very few foster parents have medical or professional therapeutic
            training for their care of kids with high special needs (everything
            from complex trauma to feeding tubes), and those who do are paid a
            living wage for this full-time care. Most foster homes simply
            receive the average $13 daily reimbursement for the child's food,
            transportation, childcare, and special activities. <br />
          </MainContent>
          <Half>
            <Image2 src='https://images.squarespace-cdn.com/content/v1/5823691a725e2518e78c6c50/1525385623625-BVHPKT4NS4BBS6YU07S0/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/FT+7.jpg?format=750w' />
            <MainContent>
              3. They make various levels of income. Some foster families are
              single parent homes where the parent works full time, others are
              dual-income, and others have an at-home parent while the partner's
              job provides financially. Due to income differences, some drive 15
              year old minivans, others drive a sportscar. As far as we can
              tell, every foster family we’ve worked with, regardless of the
              size of house or price of car, has clear and honorable intentions
              to help kids, and that’s what matters to us. We want to provide
              that extra friendship (that money can't buy) and practical support
              to any families willing to help kids heal. <br />
              4. They might be married, single, living with parents or grown
              kids, elderly, or LGBT. <br />
            </MainContent>
          </Half>
          <MainContent>
            5. They might be religious or secular. <br />
            5. They might have different food standards than you. Some will have
            a thriving vegetable garden and chicken coop, maintaining that this
            is the path to optimal nutrition. Others have days packed full with
            activities, so quick meals like hot dogs, cereal, and frozen veggies
            keep everything running. <br />
            6. They might have completed high school, or achieved a PhD.
            <br />
            7. They might dress kids differently. One parent will let kids play
            in a stained t-shirt (especially if it holds sentimental value--even
            smells of home can be comforting for a kid), and another will buy
            all new matching outfits for siblings in their homes. <br />
            8. They will have vastly different capacities and specialties.
            Foster parents quickly find their “groove” with the ages they want
            to parent (teens and babies both have their special joys), and how
            many kids they can confidently parent (some set a firm limit at one,
            others thrive orchestrating and supervising large sibling groups of
            five or six kids). <br />
            9. Parenting and communication styles vary. While we strive for all
            homes to be “trauma informed” (seeing the child’s need, rather than
            just “bad behavior”), some parents present their authority with soft
            gentleness, and others are firmly no-nonsense. <br />
            10. They may be open to adopting a child, or even in the process of
            adopting a child whose parents lost their rights. Or, they may be a
            foster family “stop along the way” for kids who are going home
            eventually. Both deeply love and care for the children in their
            homes.
            <br />
            Again, whether money is tight or plentiful, whether the kids look
            like they jumped out of a magazine or have been playing outside for
            three days straight, whether parents are accomplished in formal
            education or have huge hearts (or both!), the neighborly support you
            provide is priceless, and crucial to the family's thriving. <br />
          </MainContent>
        </Section2>
        <Section2>
          <Header>FAMILY DIFFERENCES: COMPLETE BEFORE PROCEEDING</Header>
          <MainContent>
            Are you surprised by any of the possibile differences in family
            structure or norms? Do any of them make you feel uneasy? (2+
            sentences) *
          </MainContent>
        </Section2>
        <Input />
        <ATag href='#section2'>
          <Submit
            onClick={() => {
              setSection(2)
            }}
          >
            Continue
          </Submit>
        </ATag>
      </Page>
      {section > 1 ? (
        <Page>
          
          <Section2 id='section2'>
            <Header>WHAT MAKES A GREAT FOSTER FAMILY HELPER? </Header>
          </Section2>
          <Section2>
            <Half>
              <MainContent>
                We love our Family Helpers! They are usually self-starters who
                aren’t afraid to take initiative and want their relationships to
                be meaningful and helpful to those who need them most. <br />
                Other than that, this opportunity is completely customized to
                you. For example: <br />- She might be able to double her
                grocery budget and pull out all the stops in her meal
                deliveries, dropping off five or six freezer meals in a month,
                or she might be able to afford one meal drop-off a month. <br />
                - He might work full time or be a busy stay at home dad.
                <br />- The family might love to meet for play dates or expand
                their “helping” to include what you need, or they might want to
                keep it simple, and continue with meal drop-offs exclusively.
                <br />
                - Most have considered fostering, or wish they had family
                support for fostering, but find helping a family to be the
                perfect outlet for that desire. <br />
                - They come to realize the need for friendly,
                neighbor-to-neighbor support in foster care, especially with the
                wide spectrum of needs (small to big) in the life of kids in
                foster care. <br />
                - They are self-aware and willing to offer a time and financial
                (grocery expenses) commitment that works for them, without
                over-committing. <br />
              </MainContent>
              <Image3 src='https://images.squarespace-cdn.com/content/v1/5823691a725e2518e78c6c50/1525385742778-FWVIMH270TN6KNWXQBAA/ke17ZwdGBToddI8pDm48kHk9taYkEy7sLhgS3EyD6457gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kMlYkjvFlctRdmAM11rxFQmF03bpsbun_LAh8ZlxTmgswgaiiNAbnlkQr7g4-9D1w/FT+5.jpg?format=750w' />
            </Half>
          </Section2>
          <Section2>
            <Header>MY STRENGTHS: COMPLETE BEFORE PROCEEDING</Header>
            <MainContent>
              After reading this list, please name one or two strengths you will
              bring to the match. *
            </MainContent>
          </Section2>
          <Input />
          <ATag href='#section3'>
            <Submit
              onClick={() => {
                setSection(3)
              }}
            >
              Continue
            </Submit>
          </ATag>
        </Page>
      ) : null}
      {section > 2 ? (
        <Page>
          <Section2 id='section3'>
            <Header2>
              FOSTER PARENTS' LEAST FAVORITE COMPLIMENTS (AND A FEW IDEAS FOR
              WHAT YOU SHOULD SAY INSTEAD)
            </Header2>
          </Section2>
          <Player url='https://player.vimeo.com/video/288657930'></Player>
          <Section2>
            <Header2>
              Challenge yourself to take your conversations off auto-pilot.
              Foster parents hear the following four phrases way too much:
            </Header2>
            <Card
              title='"You’re so amazing to do this!"'
              content=" -- While meant as a compliment, most foster parents will tell you this bothers them because they want the focus on the kids, who are struggling to heal and learn how to live (and that's an amazing task). It also doesn’t give the foster parent much to hold onto if he or she feels like quitting on a hard day."
            />
            <Card
              title='"You’re a hero/saint!"'
              content='-- Foster parents feel like average people. They are also not the hero in the story. Kids who’ve experienced trauma, and their parents who overcome challenges to create safe homes, are the focus. And foster parents are privileged to nurture that victory behind the scenes.'
            />
            <Card
              title='"I don’t know how you do it!" Or "I could never foster!"'
              content='-- This can add to the feelings of isolation and loneliness. It can also make the kids feel like a burden.'
            />
            <Card
              title='"Isn’t it hard to send them back?" Or "Don’t you get attached?"'
              content="-- Foster parents are trained and required to “get attached” because it’s what kids need to develop strong connections. If we turn off our humanity, shut down our tender hearts, the kids lose. So, yes, of course it's hard. At the same time, we are challenged to de-center themselves from the child’s life (which simply means “This is not about ME, it's about THEM.”), while investing massive amounts of emotional energy and focus on the child, as the children often return to family members. Foster parents appreciate not hearing this phrase, because it shows that you understand this nuance. One less thing to explain. "
            />
          </Section2>
          <Section2>
            <Header2>
              Instead of the above phrases, we love it when our Foster Family
              Helpers really listen, and empathize with the foster parent.
            </Header2>
            <MainContent>
              A phrase that almost always fits is “Thank you for loving them.”
              It works for hard days. It works for celebrations. It affirms the
              hard work of love without idolizing or isolating the foster
              parent. <br />
              "This world needs more people who will pay attention to kids like
              you do." <br />
              "I know a lot of your love for them is in the unseen moments.
              Thank you for being committed." <br />
              "I love watching you interact with the kids. Seems like they enjoy
              living here. Your [patience/joy/commitment/approach/relational
              intuition/consistency/steadiness] inspires me."
              <br />
              Find the joy. Celebrate kids. Foster parents want you to see the
              beautiful childhoods they’re nurturing--not just the trauma and
              struggle. Treat foster families with the joy and normalcy you’d
              want for your own family, all while giving them your needed gifts
              of warm neighborliness. <br />
              This helps everyone feel included, rather than ostracized, and
              delightful, rather than burdensome. And that’s the entire goal of
              foster parenting.
              <br />
              If you come up with your own great phrase to say to a foster
              parent, will you let us know? <br />
            </MainContent>
          </Section2>
          <Section2>
            <Header>WHAT TO SAY: COMPLETE BEFORE PROCEEDING</Header>
            <MainContent>
              To you, what is the most surprising phrase on the "to avoid
              saying" list? *
            </MainContent>
          </Section2>
          <Input />
          <ATag href='#section4'>
            <Submit
              onClick={() => {
                setSection(4)
              }}
            >
              Continue
            </Submit>
          </ATag>
        </Page>
      ) : null}
      {section > 3 ? (
        <Page>
          <Section2 id='section4'>
            <Header> WHAT KIDS NEED</Header>
            <MainContent>
              From
              <Link
                href='https://www.thecorkboardonline.com/2012/08/homecoming-faqs/'
                target='blank'
              >
                Homecoming FAQs
              </Link>
              and Straight from a Foster Mom:
            </MainContent>
            <MainContent>
              Please don’t ask questions about their past, their parents, their
              health status. If you do ask, we’re not offended but also don’t
              want you to be offended if we decline to answer. <br /> <br />
              Please don’t tell them or us how "lucky" they are to have a
              family. We are a flawed family with limited patience and resources
              just like everyone else, and in the end we will probably be far
              more blessed by their presence in our lives than visa versa.
              <br /> <br />
              Don’t label the kids, and only differentiate kids by how they
              entered a family when necessary. When we do distinguish, we call
              [kids born to us] “bio” kids, not “real” or “natural.” [Also avoid
              “your own kids.” Instead of “foster kids,” say “children in foster
              care.” Other ideas: “kids who were already at home with you,” and
              use first names whenever possible, to avoid reinforcing
              insecurities.] <br /> <br />
              Give attention to the children already in the home. Having a new
              child in the home is a big adjustment as parents may feel consumed
              with visits, therapy appointments, and providing the new child
              with attention and nurturing in order to best meet their higher
              level of needs. Other children in the home will benefit from your
              attention and desire to do fun things with them. Simple
              implementation: When you enter the home, make sure to greet each
              of the children with the same level of enthusiasm and interest.
              <br /> <br />
            </MainContent>
            <Header>PERSPECTIVE FROM FOSTER MOM TRACI SCHMIDLEY: </Header>
            <MainContent>
              Excerpts from: My Foster Children Have Too Many Toys— but let me
              tell you what they do need <br /> <br />
              Many children who come into foster care may be overly clingy and
              lack appropriate boundaries. It’s easy to want to cuddle and
              coddle them and shower them with attention and affection to help
              heal their pain. However, [sometimes this is a sign that he or she
              has] made so many transitions they are confused as to who is
              “their person” and may seek the attention of any adult willing to
              give affection, which can be quite dangerous. Many of our friends
              will experience a foster child climbing up onto their laps and
              refuse to get down, and believe “Oh we have such a special bond!
              She loves me!” But the truth is the child likely does that to
              every single stranger we pass. <br />
              <br />
              We can’t undo (sometimes years of) neglect by giving excessive
              attention now. Hurting children need affection, no doubt, but they
              also need to learn boundaries, and to be guided toward forming
              safe connections and trust with their new caretaker first. <br />
              <br />
              I appreciate you the most when you give my foster children a quick
              hug, a few kind words, and encourage him or her to continue doing
              whatever activity they were previously engaged in, just like you
              would any other child. <br />
              <br />
              Ask the foster parent before giving extra food and special gifts.
              Once again, overcompensating for the previous neglect will hinder,
              not help, the healing process. I remember one time a very
              well-meaning gentleman at my church gave my foster son a Bible
              with an inscription written in it. My husband had already
              purchased one that he was waiting to give to him for his birthday.
              There is nothing wrong with two Bibles, but of course, that was a
              special gift my husband wanted to give our foster son. This
              particular boy had an absent father and struggled with male
              authority figures. A Bible from his foster father would likely
              have been more meaningful to our foster son if it wasn’t the
              second one he received and if he hadn’t already received one from
              someone he barely knew. It’s easy to want to step in and mentor a
              child in foster care, but be sure to not step on the foster
              family’s toes when you doing so. The best way to avoid stepping on
              toes is simply by asking first. <br />
              <br />
              Read the rest of Traci's article
              <Link
                href='https://medium.com/@tracischmidley/please-dont-give-my-foster-child-another-stuffed-animal-45435641c8ff'
                target='blank'
              >
                here.
              </Link>
            </MainContent>
          </Section2>
          <Section2>
            <Header>WHAT KIDS NEED: COMPLETE BEFORE PROCEEDING</Header>
            <MainContent>
              What, if anything, was new to you in this section on how to
              approach the kids? *
            </MainContent>
            <InputHolder>
              <BigInput />
            </InputHolder>
            <MainContent>
              Do you anticipate any of these foster parent requests will be
              difficult for you? Why or why not? *
            </MainContent>
            <InputHolder>
              <BigInput />
            </InputHolder>
            <MainContent>
              What can we improve in this training module? What would you add,
              clarify, or take away?
            </MainContent>
            <InputHolder>
              <BigInput />
            </InputHolder>
          </Section2>
          <Submit
            onClick={() => {
              props.history.push('/training/4')
            }}
          > 
            Submit
          </Submit>
        </Page>
      ) : null}
      <Page>
        <Footer>
          <Stepper activeStep={2} />
        </Footer>
      </Page>
    </>
  )
}
