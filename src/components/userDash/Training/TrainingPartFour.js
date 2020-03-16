import React, { useState } from 'react'
import {
  Page,
  BigTitle,
  Header2,
  Section2,
  MainContent,
  Image2,
  Signature,
  Input,
  Submit,
  ATag,
  Header,
  Footer,
  Half,
  Image4,
  BigLink,
  InputHolder,
  SignContain,
  Quote,
  BigInput,
  Link,
  Section,
} from './TrainStyle'
import Player from 'react-player'
import 'react-animated-slider/build/horizontal.css'
import Stepper from './TrainingStepper'
import Card from './Card'

export default function TrainingFour(props) {
  const [section, setSection] = useState(1)
  return (
    <>
      <Page>
        <BigTitle>FOUR: RULES, LAWS, & ABUSE PREVENTION</BigTitle>
        <Player url='https://player.vimeo.com/video/288657921' />
        <Section2>
          <Header>WHEN DO YOU NEED A BACKGROUND CHECK?</Header>
          <MainContent>
            Basic Overview of Safety and Legal Requirements: <br /> <br />
            We perform a basic Colorado Arrest Records check before each match.
            Foster Together defers to foster parents whether to reveal their
            home address after the initial meeting with the helping family. In
            the case of Foster Family Helpers who desire to do more with
            families (babysitting, driving, etc), Foster Together defers to the
            licensing county or agency, as background check and training
            requirements differ across institutions.
            <br /> <br />
            Option One: Casual Helping <br />
            <br />
            While there is no legal requirement for a background check or
            training for casual contact with a foster family (i.e. dropping off
            meals, meeting at the park with the foster parents and kids), we do
            run a Colorado Arrest Records check as a buffer. As a Foster Family
            Helper, you are developing a natural relationship with the family,
            and are allowed to help out as any other friend or neighbor would.
            As a best practice, Foster Together Colorado seeks to deter
            predators from our matching program by educating families in sexual
            abuse prevention, red flags for predatory grooming, and body safety
            rules (more info in the next section). We know that talking openly
            about prevention with adults in the child’s life is the best way to
            keep kids safe. As with any family connections, foster parents have
            the responsibility to be aware and cautious as all parties earn
            trust. <br /> <br />
            Option Two: Regular Babysitting for Less than Six Hours, or Driving
            Children <br /> <br />
            For anyone who babysits for less than six hours or transports kids
            in a car, foster parents may be required to do one of the following.
            Agency and county requirements likely include:
            <ul>
              <li>
                CBI, FBI, TRAILS (BIU), sexual offender registry background
                checks
              </li>

              <li>Proof of auto insurance and valid driver’s license. </li>

              <li>
                Check references, personal interview, training, and/or other
                agency-specific vetting.
              </li>
              <MainContent>OR</MainContent>
              <li>
                Acceptability under the agency or county’s individual
                interpretation of the Reasonable and Prudent Parenting Standard.
              </li>
            </ul>
            Option Three: Babysitting More than Six Hours or Overnight Respite
            in Foster Home <br />
            For anyone who provides respite (babysitting for over six hours or
            overnight) in the licensed foster home, agency and county
            requirements likely include:
            <ul>
              <li>
                CBI, FBI, TRAILS (BIU), sexual offender registry background
                checks
              </li>
              <li>Core foster care training on rules and regulations</li>
              <li> CPR and first aid certification</li>
              OR
              <li>
                Acceptability under the agency or county’s individual
                interpretation of the Reasonable and Prudent Parenting Standard.
              </li>
            </ul>
            Option Four: Babysitting Overnight in Family Helper’s Home For
            anyone who provides respite (babysitting for over six hours or
            overnight) in their own home, agency and county requirements likely
            include: <br />
            <ul>
              <li>
                CBI, FBI, TRAILS, and sexual offender registry background checks
              </li>
              <li>CPR and first aid certification</li>
              <li>
                Full home study (foster home certification process) on the
                Family Helper’s home
              </li>
              <li>Full state-required foster care training</li>
              OR
              <li>
                Acceptability under the agency or county’s individual
                interpretation of the Reasonable and Prudent Parenting Standard.
              </li>
            </ul>
            At any time in the match, foster parents and Foster Family Helpers
            may contact the agency or county to request specific next steps for
            allowing childcare, transportation, or other contact with kids.
            Foster Together is willing to help with this process. Foster Family
            Helpers are encouraged to pay for their own background checks, but
            Foster Together is willing to subsidize these costs if needed.
          </MainContent>
        </Section2>
        <Section2>
          <Header>
            UNDERSTANDING LEGAL REQUIREMENTS: COMPLETE BEFORE PROCEEDING
          </Header>
          <MainContent>
            Do you have any questions about the requirements listed here? Please
            let us know so we can clarify. *
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
        <Page id='section2'>
          <Player url='https://www.youtube.com/embed/ULGJphesPnk' />
          <Section2>
            <Header>SEXUAL ABUSE PREVENTION </Header>
            <MainContent>
              Because one in three girls and one in four boys will be targets
              for sexual abuse, we can't leave this part out. <br />
              Because kids in foster care are one of the groups most at-risk to
              be abused, we can't afford not to prepare every Foster Family
              Helper to prevent abuse. <br />
              For many people, this may be the toughest part of the Foster
              Together process. And we thank you for doing it anyway. <br />
              We are looking for adults who are willing to feel uncomfortable in
              this training, so that they can decrease the likelihood of abuse
              for the kids they care about. <br />
              <Half>
                <Image2 src='https://images.squarespace-cdn.com/content/v1/5823691a725e2518e78c6c50/1525386132069-86G9CUPJYIFKEVYT5SKY/ke17ZwdGBToddI8pDm48kAUFOTPMSVxuKvNFAx6DKiZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ouw-8l5B_J38LMU7OZFvYc0yAe_x11zxahcI_hfw238yWAp0jGKzhuVZoU5dfkFlA/FT+37.jpg?format=750w' />
                <MainContent>
                  We do not include this section to scare you or make people
                  super-suspicious of each other. Rather, we want to create a
                  Foster Together culture of open conversations and clarity.
                  <br />
                  The main point is that secrets and wrong motivations can't
                  exist in the light of open communication and savvy
                  supervision. So if you have nothing to hide, you have nothing
                  to worry about. <br />
                  We also know that the most effective way to prevent predators
                  from targeting our kids is by setting the expectation for all
                  adults involved that private parts are off limits and secrets
                  are a no-go. As a foster care volunteer opportunity, we
                  realize that someone who wants to gain access to children
                  might see Foster Together as an easy target. <br />
                  Requiring this training for all foster parents and Family
                  Helpers is the best way we know to say "Not on our watch."
                  <br />
                  Please read the two linked articles, review the chart of “body
                  safety rules,” and fill out the following form, stating that
                  you understand that our foster parents are aware of red flags
                  for sexual abuse, and regularly enforcing the rules below.
                </MainContent>
              </Half>
            </MainContent>
            <Header2>Again, thank you for sticking with us!!!</Header2>
          </Section2>
          <Section2>
            <Header>A few articles to read.</Header>
            <ul>
              <li>
                <Link href='https://parentingsafechildren.com/what-offenders-want-you-to-know/'>
                  WHAT SEXUAL OFFENDERS WANT YOU TO KNOW
                </Link>
              </li>
              <li>
                <Link href='https://parentingsafechildren.com/your-top-10-questions-about-body-safety-2/'>
                  Your Top 10 Questions About Body Safety!
                </Link>
              </li>
            </ul>
            <MainContent>
              Excerpt: Pay attention to our behaviors. <br />
              People who sexually abuse children methodically groom to gain
              access—and then compliance. <br />
              <Quote>
                “The kids I abused were all seeking love. I would shower the
                child with gifts, special treatment and attention, and
                painstakingly move toward the moment when I could gain
                compliance and cross the line.”
              </Quote>
              In some instances, the parent is also being groomed through a
              level of generosity that is probably too good to be true – free
              babysitting, financial support, and perhaps an excessive
              willingness to “help out.” <br /> <br />
              There is good news. With knowledge, you can recognize grooming
              behaviors and with courage, you can speak up. <br /> <br />
              Lesson: Pay attention to these kinds of behaviors and patterns:
              favoring children, special treatment, allowing kids to break
              rules, gift-giving, lots of attention, a listening ear, taking a
              child’s side, manipulation, introducing kids to sexual material,
              or talking about sex (i.e., sexualizing the relationship). <br />
              <br />
            </MainContent>
          </Section2>
          <Section2>
            <MainContent>
              What did you learn from the above article(s)? (3+ sentences)
            </MainContent>
          </Section2>
          <Input />
          <ATag href='#section3'>
            <Submit
              onClick={() => {
                setSection(3)
              }}
            >
              Submit
            </Submit>
          </ATag>
        </Page>
      ) : null}
      {section > 2 ? (
        <Page id='section3'>
          <Header>BODY SAFETY RULES BY THE MAMA BEAR EFFECT</Header>
          <Section2>
            <MainContent>
              Foster parents wishing to use a Foster Together parent helper are
              required to post the body safety rules in their home. We purchase
              a poster for each of our foster families, and if you'd like one
              for your own home, you may order by clicking
              <Link
                href='https://mamabeareffect.ecwid.com/Body-Safety-Poster-p51112142'
                target='blank'
              >
                here.
              </Link>
            </MainContent>
            <Image4 src='https://images.squarespace-cdn.com/content/v1/5823691a725e2518e78c6c50/1524686041133-7YL55J2UUCA0HGFQ9DFQ/ke17ZwdGBToddI8pDm48kGrEzKbmlT1aXa03pZYZUlJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmD3GJgI7_jN764QbmlaUTk5WyFFzHgH39gSTvnaFnniHmMoF0B1QmrvergKLtg00N/mama+bear+effect.jpg?format=1500w' />
          </Section2>
          <Section2>
            <Header2>
              BODY SAFETY RULES FOR ALL FOSTER TOGETHER HOMES: COMPLETE BEFORE
              PROCEEDING
            </Header2>
            <SignContain>
              <MainContent>
                The children in this home are actively taught body-safety rules
                and we ask that you reinforce these rules if the child ever
                raises the topics of: private parts, secrets, feeling unsafe, or
                open communication. *
              </MainContent>
              <InputHolder>
                <Signature placeholder='Sign/Type Name Here' />
              </InputHolder>
            </SignContain>
            <SignContain>
              <MainContent>
                Rule One: Children in this home do not touch other people’s
                private parts and no one is allowed to touch theirs.
              </MainContent>
              <InputHolder>
                <Signature placeholder='Sign/Type Name Here' />
              </InputHolder>
            </SignContain>
            <SignContain>
              <MainContent>
                Rule Two: Children in this home are regularly instructed not to
                keep secrets from the parents in their lives. *
              </MainContent>
              <InputHolder>
                <Signature placeholder='Sign/Type Name Here' />
              </InputHolder>
            </SignContain>
            <SignContain>
              <MainContent>
                Rule Three: Children in this home are regularly reminded to tell
                a safe adult if anyone tries to break any of their body safety
                rules or asks them to do anything that worries or frightens
                them. *
              </MainContent>
              <InputHolder>
                <Signature placeholder='Sign/Type Name Here' />
              </InputHolder>
            </SignContain>
            <SignContain>
              <MainContent>
                Rule Four: We have open communication with children in this home
                and no topics are off-limits. *
              </MainContent>
              <InputHolder>
                <Signature placeholder='Sign/Type Name Here' />
              </InputHolder>
            </SignContain>
            <SignContain>
              <MainContent>
                I understand that foster parents using a Foster Together helper
                are trained on this material and regularly talk about body
                safety with all kids at home. *
              </MainContent>
              <InputHolder>
                <Signature placeholder='Sign/Type Name Here' />
              </InputHolder>
            </SignContain>
            <MainContent>
              Any questions or concerns about this section?
            </MainContent>
            <InputHolder>
              <BigInput />
            </InputHolder>
          </Section2>
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
        <Page id='section4'>
          <Header2>
            WHAT TO DO IF YOU SUSPECT ABUSE, OR A CHILD DISCLOSES ABUSE
          </Header2>
          <Section2>
            <Header>
              1. Be prepared:{' '}
              <BigLink
                href='https://themamabeareffect.org/prevent/when-to-speak-up/'
                target='blank'
              >
                {' '}
                How to Know, Who to Call, What to Say (Click to read){' '}
              </BigLink>
            </Header>{' '}
            <br />
            <Header>
              2. You need to call it in: Colorado has our own child abuse
              hotline: 1-800-CO4KIDS. Remember, you don't have to investigate
              abuse before making the call. That's not your job. Most people are
              too afraid to take this step, but the child needs you to do it.{' '}
              <br /> TO DO: Save this number, and send a screenshot of the
              contact in your phone to connect@fostertogether.co.
            </Header>{' '}
            <br />
            <Header>
              3. Seek treatment for the child.{' '}
              <BigLink href='https://www.safepassagecac.org/'>
                Safe Passage Colorado{' '}
              </BigLink>{' '}
              provides a seamless referral and treatment system, lessening the
              trauma to the child and caretaker during an investigation. Contact
              them here: safepassagecac.org/
            </Header>
            <Header>
              4. Get help for the offender. If, after reading this, you realize
              that someone you know (or yourself) is abusing children, please
              get help. Treatment can be very effective and may even save a
              life.{' '}
              <BigLink href='https://www.atsa.com/referral'>
                {' '}
                This referral form{' '}
              </BigLink>{' '}
              with the Association for Treatment of Sexual Offenders is
              completely anonymous: atsa.com/referral
            </Header>
          </Section2>
          <Section2>
            <MainContent>
              What Colorado-based number do you call if you suspect a child is
              being abused?
            </MainContent>
            <InputHolder>
              <Signature />
            </InputHolder>
            <MainContent>
            What is the name of the local program that walks abused kids through the investigation and initial recovery process? *
            </MainContent>
            <InputHolder>
              <Signature />
            </InputHolder>
            <MainContent>
            Where can you request a referral for the treatment of someone who has abused children? *
            </MainContent>
            <InputHolder>
              <Signature />
            </InputHolder>
          </Section2>
          <Submit>Submit</Submit>
        </Page>
      ) : null}
      <Page>
        <Footer>
          <Stepper activeStep={4} />
        </Footer>
      </Page>
    </>
  )
}
