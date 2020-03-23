import React, { useState, useEffect } from 'react'
import Slider from 'react-animated-slider'
import {
  Page,
  BigTitle,
  Header2,
  Section2,
  Center,
  Container,
  MainContent,
  Image,
  Wrap,
  Input,
  Submit,
  ATag,
  MainContent2,
  Header,
  Footer,
  Select,
  Option,
  Section,
  CheckBox,
} from './TrainStyle'
import Player from 'react-player'
import 'react-animated-slider/build/horizontal.css'
import Logo from '../../AdminDash/AdminDashPics/foster.png'
import picture3 from './trainingIcons/pic3.jpg'
import hand from './trainingIcons/hand.jpg'
import book from './trainingIcons/book.png'
import Stepper from './TrainingStepper'
import '../../../App.css'
export default function TrainingTwo(props) {
  const [form, setForm] = useState({
    answer1: '',
    answer2: '',
  })
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const [section, setSection] = useState(1)
  const Hours = [
    { value: '5 hours a month' },
    { value: '2 hours a week' },
    { value: '5 hours a week' },
    { value: 'One weekend every two months' },
    { value: 'One weekend a month' },
  ]
  const steps = [
    {
      picture: Logo,
      step: 1,
      title: "Submit your application. You're already DONE with this one!",
      content:
        'Want to grow our team? Send your friends to fostertogether.co/help or contact us to set up a Neighborhood Party with local foster parents and your friends!',
    },
    {
      picture: picture3,
      step: 2,
      title:
        'At your own pace, read and answer questions in all four training modules, then sign the contract.',
      content:
        'More good news: you are already on Module Two of four! The full process should take two to three hours, and can happen over a few days or all at once.',
    },
    {
      picture: 'https://player.vimeo.com/video/288660938',
      step: 3,
      title:
        'Get an overview of the family closest to you, and agree to be matched.',
      content:
        'NOTE: We are working statewide and expanding our outreach to foster parents daily. It may take up to two months for us to find a match for you, but rest assured, it’s a priority!',
    },
    {
      picture: hand,
      step: 4,
      title: 'Set your initial meeting.',
      content: `Let the foster family know a bit about yourself, and offer three options of a time to meet the family and deliver their first meal. Foster Together will do the work of sharing the foster parent's family evaluation (especially dietary restrictions, and most-needed helping tasks) with you. By this time, both you and the foster family have signed the contract (at the end of these four training modules) outlining expectations and responsibilities for both parties. Some foster parents prefer to meet at a neutral location first, to allow both parties to get a “feel” for each other, and make sure no red flags arise. We want this match to be as natural as getting to know a caring nextdoor neighbor.`,
    },
    {
      picture: book,
      step: 5,
      title: 'Check in every month. Develop a relationship!',
      content:
        'Drop the foster parents a line every few weeks to make sure your meals are received. Ask how the family enjoys the food, and be genuinely open to specific requests or changes, within reason. If desired and fitting into your time/money budget, you and the foster family are free to develop a relationship beyond meal drop-off, always with the oversight of the family’s county or agency (for childcare or transportation).',
    },
  ]
  return (
    <>
      <Page>
        <BigTitle>TWO: HOW TO DO IT? </BigTitle>
        <Header>FIVE STEPS IN THE MATCHING PROCESS </Header>
        <Container>
          <Slider height='800px'>
            {steps.map((slides, index) => (
              <Center key={index}>
                <Header style={{ margin: 0 }}>Step: {slides.step}</Header>
                {index == 2 ? (
                  <Wrap>
                    <Player height='100%' url={slides.picture} />
                  </Wrap>
                ) : (
                  <Image src={slides.picture}></Image>
                )}
                <MainContent>{slides.title}</MainContent>
                <MainContent>{slides.content}</MainContent>
              </Center>
            ))}
          </Slider>
        </Container>
        <Header>
          UNDERSTANDING THE FIVE STEPS: (COMPLETE BEFORE PROCEEDING)
        </Header>
        <Section2>
          <MainContent>
            Do you have any questions about the five steps? Write them here so
            we can provide clarity. *
          </MainContent>
        </Section2>
        <Input name='answer1' value={form.answer1} />
        {section == 1 ? (
          <ATag href='#part2'>
            <Submit
              onClick={() => {
                setSection(2)
              }}
            >
              Continue
            </Submit>
          </ATag>
        ) : null}
      </Page>
      {section > 1 ? (
        <Page id='part2'>
          <Header>BEST PRACTICES FOR A HAPPY MATCH </Header>
          <Player url='https://player.vimeo.com/video/288657931'></Player>
          <Section2>
            <Header2>1. Be clear.</Header2>
            <MainContent2>
              Before offering specific details on meal drop-off at the first
              meeting, the Helper already has an idea of what would work well
              for his or her schedule and budget (see questionnaire below).
            </MainContent2>
            <Header2>2. Start with simple, small tasks.</Header2>
            <MainContent2>
              Foster Together starts all matches with the Family Helper dropping
              off a meal once a month. You may like to expand your
              responsibilities over the coming weeks or months, and each foster
              family communicates with us about a variety of needs in the
              home--not just meals. Before you commit to more, we encourage you
              to establish a rhythm with only one task (meal drop-off) within
              your time/money budget before adding more. In the past, some
              Helpers have jumped in enthusiastically (for example, creating ten
              freezer meals per month), then felt awkward when they had to cut
              back due to the grocery budget or time demands. You can always add
              tasks, but it's best not to over commit.
            </MainContent2>
            <Header2>3. Stay focused.</Header2>
            <MainContent2>
              The Family Helper’s main job is to give the foster parent
              additional capacity (time, emotional energy, physical energy,
              encouragement) to remain emotionally present with the child(ren).
              Therefore, in addition to meals, specific helping tasks may
              include errands, housework, homework in a family setting, or
              supervising playtime while the parent is home. As the
              parent-helper relationship develops and trust is warranted, more
              interaction with the children may be helpful (driving,
              babysitting, respite), as approval by county or agency is granted.
              Keep in mind, though, the Family Helper’s primary job is not to
              develop a relationship with the child, become a mentor, or show
              special attention. In other words, you are a warm presence and
              practical help for the whole family, and not a "special friend" to
              the kids (you'll see specific examples and more explanations in
              Module Three).
            </MainContent2>
            <Header2>4. Ask for help.</Header2>
            <MainContent2>
              If one party begins to feel uneasy about any aspect of the match,
              and clear, kind communication does not resolve the problem,
              contact Foster Together for assistance.
            </MainContent2>
            <Header2>5. Be yourselves.</Header2>
            <MainContent2>
              Let the relationship benefit others naturally, as far as both
              parties are comfortable. Does the Helper have a friend who would
              like to deliver a meal? Does the Foster Parent know a fellow
              foster parent who needs help? Open communication and idea-sharing
              can make the best kinds of neighborly connection.
            </MainContent2>
            <Header2>
              6. Approach the matching relationship as you would a new
              friendship.
            </Header2>
            <MainContent2>
              Be courteous (on time, predictable), anticipate the needs of the
              other person, don’t make assumptions (please DO over-communicate
              at first!), and get to know each other.
            </MainContent2>
            <Header2>7. Know when you need to get official.</Header2>
            <MainContent2>
              If the family needs help with driving or babysitting, ask the
              family, or Foster Together, for background requirements from the
              foster care agency or county. You'll get the details of possible
              requirements in Module Four.
            </MainContent2>
          </Section2>
          <Header>
            UNDERSTANDING OF RESPONSIBILITY: COMPLETE BEFORE PROCEEDING
          </Header>
          <Section2>
            <MainContent>
              Please summarize your responsibility (relationally and
              practically) in this match with a sentence or two: *
            </MainContent>
          </Section2>
          <Input />
          {section == 2 ? (
            <ATag href='#part3'>
              <Submit
                onClick={() => {
                  setSection(3)
                }}
              >
                Continue
              </Submit>
            </ATag>
          ) : null}
        </Page>
      ) : null}
      {section > 2 ? (
        <Page id='part3'>
          <Section2>
            <Header>
              MEAL DELIVERY TIPS (FROM MICHELE, A CURRENT FAMILY HELPER)
            </Header>
          </Section2>
          <Section2>
            <MainContent>
              <br /> Buy foil baking pans on sale to keep on hand. <br /> <br />
              Enclose baking/cooking instructions (if needed). <br /> <br />
              Less logistical coordination is better. I told the foster mom,
              “Leave a cooler on your porch, and I’ll fill it up on Monday
              mornings.” (This may change over time--keep reading!) <br />
              <br />
              Use containers you don't need back. The last thing I want to do is
              add to her burden, so if she's not able to clean them, she is
              welcome to recycle or toss. <br /> <br />
              If something should be refrigerated quickly (i.e., raw cookie
              dough, potato salad, etc.) I over-communicate (sending an extra
              text after drop-off) to make sure the foster mom remembers to grab
              it from the cooler. <br /> <br />I am flexible on the day of the
              week I drop off, and so is she! With the first kids she fostered,
              there was one day a week in which she spent most of the day in
              meetings with the kids' families, so she didn't have much time to
              cook. So while she had those kids, I made a point of dropping off
              the same day each week. Now with a new set of siblings, she
              doesn't have the same restriction on her schedule, so I drop off
              when it works for me. <br /> <br />
              If I don't have time to cook something elaborate, I put in all the
              components for an easy & kid-friendly dinner. Last week, for
              example, I gave her the ingredients for naan bread pizzas, along
              with a salad and several other items. <br /> <br />
              Consider what mealtime would be most helpful for the family.
              Dinner is always the first thought, but would breakfast be more
              helpful, as the foster parent is rushing to get kids to school on
              time? <br /> <br />
              I try to take good care of all the kids in the house--kids born to
              the foster family, and kids in foster care--so no one feels left
              out. It just so happens that she has nine year old twins, and I
              have an 11 year old daughter and a 10 year old son: perfect ages
              to pass along my kids' clothes & books. <br /> <br />
              If I drop off clothes or supplies, I organize by size and gender,
              and only drop off what the foster parent can use. Extra can go to
              the thrift store or one of Foster Together's clothing partners.
              <br /> <br />
              I keep track of the foods I drop off to avoid too much repetition
              and make notes if there's something in particular that a certain
              kid or parent likes/dislikes. <br /> <br />
              Find out the best method of communication for the foster parent
              (phone, text, email, IM, etc.). I think for the first few weeks,
              she and I were emailing until we both realized that neither of us
              check our email regularly, then we switched to text for most of
              it. While a well-rounded, delicious, and kid-friendly meal is the
              most requested support, you are free to get creative! Foster
              Family Helpers sometimes include a treat like fresh-baked cookies,
              the kids’ favorite fruit or veggies already sliced for snack time
              throughout the week, a loaf of fresh bread, breakfast burritos, or
              a bar of chocolate or tub of gelato as a post-bedtime treat for
              mom or dad. Have fun thinking of ways to make the family feel
              special and supported. <br /> <br />
              Friendly gestures are always a bonus. Some Family Helpers write
              short notes of gratitude and solidarity to the foster parents.
              Others text an encouraging message every few weeks. When many
              foster parents feel isolated, being thoughtful goes a long way.
              <br /> <br />
              Some Family Helpers prefer picking up takeout over cooking, and
              some families think takeout is a treat! One Helper simply doubles
              her own recipe for her family’s dinner every Thursday. Another
              Family Helpers picks up fried chicken and sides at the grocery
              store, or lasagna at Costco. Listening to what the family wants
              and needs will make this an extremely effective gift. <br />
              <br />
              Consider the family’s desires and needs, then find the best option
              to fit your schedule. <br /> <br />
              Offer specific drop-off times to choose from (“Tuesday at 6,
              Thursday at 4, or Sunday at noon?”). This is better than an
              open-ended question, (“Is there a good day for me to bring a
              meal?”) which can lead to a slower process. <br /> <br />
              When foster parents go on to adopt, they can use support through
              that process, too.
              <br /> <br />
            </MainContent>
          </Section2>
        </Page>
      ) : null}
      {section > 2 ? (
        <Page>
          <Section2>
            <Header>TIPS FOR THOSE WHO WANT TO GO BEYOND THE MEAL</Header>
            <MainContent>
              If you're the type who wants to customize the match to the foster
              parent's most-needed tasks, here's how you do that: <br />
              If you and the foster parent decide to make arrangements for you
              providing babysitting or transportation, the foster parent’s
              agency or county may require a background check, which can take up
              to three weeks. We are here to help with that process. Email
              connect@fostertogether.co to get started. <br />
              After a few meal deliveries, consider asking the family if they’d
              like to meet for a playdate, or would like help with a specific
              chore. <br />
              When your foster family receives a new placement of a child,
              consider asking if the child needs any additional supplies or
              clothes. You’re welcome to collect items from friends or family.
              For example, after her foster family welcomed two little ones in
              November, who did not have their own coats, one Helper posted a
              request for winter gear with the children’s sizes--explaining they
              are in foster care and giving no additional identifying
              information--on a local buy-sell-trade group. The next week, she
              dropped off five bags full of clothes, toys, coats, and boots
              along with the family’s weekly meal. <br />
              Foster Together also collaborates with three foster parent-owned
              nonprofits to provide additional resources, physical supplies, and
              support to foster families. If a need arises, please let us know
              so that our group can partner with you find and deliver the items.
              Connect@fostertogether.co. <br />
            </MainContent>
          </Section2>
          <Section2>
            <Header>CAPACITY SURVEY: COMPLETE BEFORE PROCEEDING</Header>
          </Section2>

          <Section2>
            <MainContent>
              How much time do you want to spend helping a foster family? *
            </MainContent>
            <Select id='hours' name='hours' value='' onChange=''>
              {Hours.map(state => (
                <Option key={state.value} value={state.value}>
                  {state.value}
                </Option>
              ))}
            </Select>
            <MainContent>
              Do you understand that the decision to add additional meals or
              helping tasks is at the discretion of you and the foster family? *
            </MainContent>
            <Header>
              I understand that the decision to add additional meals or helping
              tasks is at the discretion of you and the foster family? *
            </Header>
            <CheckBox type='checkbox' />
            <Header>
              As I get to know them, I am open to providing practical support to
              the foster family, beyond meals. *
            </Header>
            <CheckBox type='checkbox' />
            <Header>
              Do you understand that you may need a background check in order to
              provide assistance beyond meal drop-off? *
            </Header>
            <CheckBox type='checkbox' />
            <Header>
              Do you understand that Foster Together and the foster parents are
              here to help facilitate any needed background checks with the
              family's foster care agency or county, and that this process can
              take one to four weeks, depending on the requirements of the
              specific county or agency? *
            </Header>
            <CheckBox type='checkbox' />
          </Section2>
          <Section>
            <MainContent>
              How can we improve this module? What would you add, shorten, or
              eliminate? This program is just getting started, so your feedback
              is helpful!
            </MainContent>
          </Section>
          <Input />
          <Submit
            onClick={() => {
              props.history.push('/training/3')
            }}
          >
            {' '}
            Submit{' '}
          </Submit>
        </Page>
      ) : null}
      <Page>
        <Footer>
          <Stepper activeStep={1} />
        </Footer>
      </Page>
    </>
  )
}
