import React, { Component } from 'react';
import {
  Definition,
  DefinitionDescription,
  DefinitionFooter,
  DefinitionExamples,
  DefinitionExample,
  DefinitionTermLg,
} from '../components/Definition';
import styled from 'styled-components';
import { rem } from 'polished';

const DefinitionForm = styled.div`
  grid-column: 3;
  padding: ${rem('50px')} ${rem('40px')} ${rem('40px')};
  min-height: ${rem('369px')};
  background-color: #eaf4ff;
  max-height: ${rem('500px')};
  position: sticky;
  top: 93px;
`;

const FormLegend = styled.legend`
  margin-bottom: ${'40px'};
  font-family: 'Cutive Mono', sans-serif;
  font-size: ${rem('14px')};
  letter-spacing: ${rem('0.37px')};
  line-height: 1.2;
  color: #495460;
`;

const FormLabel = styled.label`
  display: block;
  margin-top: ${rem('40px')};
  font-family: 'HK Grotesk', sans-serif;
  font-size: ${rem('14px')};
  letter-spacing: ${rem('0.37px')};
  line-height: 1.3;
  color: #495460;
`;

const FormInput = styled.textarea`
  max-width: 100%;
  width: 100%;
  margin-top: ${rem('5px')};
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-family: 'Cutive Mono', sans-serif;
  font-size: ${rem('14px')};
  letter-spacing: ${rem('0.37px')};
  line-height: 1.3;
  color: #495460;
  resize: none;
  overflow: hidden;
  outline: none;
`;

const SubmitBtn = styled.input`
  display: block;
  appearance: none;
  background-color: rgba(0, 0, 0, 0);
  margin-left: auto;
  margin-top: ${rem('20px')};
  padding: ${rem('10px')};
  border: 1px solid #979797;
  font-family: 'HK Grotesk', sans-serif;
  font-size: ${rem('14px')};
  letter-spacing: ${rem('0.37px')};
  line-height: 1.3;
  color: #495460;
  transition: 0.1s ease-in;

  &:hover {
    cursor: pointer;
    background-color: #495460;
    color: #ffffff;
  }
`;

const UserDefinitions = styled.div`
  padding-left: ${rem('60px')};
`;

const DefinitionHeader = styled.h1`
  position: sticky;
  top: 100px;
  height: ${rem('90px')};
  background-color: #fff;
  transform: translateY(-10px);
  margin-bottom: ${rem('80px')};

  span:first-child {
    display: block;
    margin-bottom: ${rem('5px')};
    font-family: 'HK Grotesk', sans-serif;
    font-size: ${rem('14px')};
    font-weight: bold;
    letter-spacing: ${rem('0.37px')};
    line-height: 1.3;
    color: #495460;
  }

  span:last-child {
    display: block;
    position: relative;
    margin-bottom: ${rem('77px')};
    font-family: 'HK Grotesk', sans-serif;
    font-size: ${rem('36px')};
    font-weight: 300;
    letter-spacing: ${rem('0.95px')};
    line-height: 1.6;
    color: #495460;
    -webkit-font-smoothing: antialiased;

    &::before {
      position: absolute;
      content: '“';
      top: 0;
      left: ${rem('-17px')};
    }

    &::after {
      content: '”';
    }
  }
`;

const EmptyStateText = styled.p`
  font-family: 'HK Grotesk', sans-serif;
  font-size: ${rem('20px')};
  font-weight: 500;
  letter-spacing: ${rem('0.53px')};
  line-height: 1.4;
  color: #495460;
  -webkit-font-smoothing: antialiased;
`;

class Defintion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formDefinition: 'Write here...',
      formExamples: ['Write here...'],
      curUser: {
        username: 'genethebene',
      },
      definitions: [
        {
          id: 1,
          date: '12/18',
          term: 'Console.log it',
          user: {
            name: 'genethebene',
            userUrl: '/u/genethebene',
          },
          description: `Originally most servers were storage servers with multiple hard disks attached.

            So when a server was started the OS had to boot as well as the HDD all come up to speed before the server was useful. So the term spin up the server refers to the start time, primarily to spin the hard drives to operating speed so it can boot and they are ready to respond.`,
          examples: [
            'I can’t seem to find this bug. I guess I need to console.log it.',
            'When dealing with difficult bugs, I always need to remind myself to take the time and console.log it.',
          ],
          comments: [
            {
              id: 1,
              text: 'Best definition ever!!',
              createdAt: 'December 11, 2018',
              users: {
                username: 'mrbut',
              },
            },
            {
              id: 1,
              text: 'Sounds about right',
              createdAt: 'December 10, 2018',
              users: {
                username: '01212',
              },
            },
          ],
          thumbsUp: 10,
          thumbsDown: 2,
          termURL: 'console-log-it',
        },
        {
          id: 2,
          date: '12/17',
          term: 'Console.log it',
          description:
            'In software engineering, rubber duck debugging is a method of debugging code. The name is a reference to a story in the book The Pragmatic Programmer in which a programmer would carry around a rubber duck and debug their code by forcing themselves to explain it, line-by-line, to the duck.',
          examples: [
            'I can’t seem to find this bug. I guess I need to console.log it.',
          ],
          thumbsUp: 22,
          thumbsDown: 3,
          termURL: 'console-log-it',
        },
        {
          id: 3,
          date: '12/16',
          term: 'Console.log it',
          description:
            'A dark place only explored by those who refuse to adopt promises and async/await.',
          thumbsUp: 2,
          thumbsDown: 9,
          termURL: 'console-log-it',
        },
      ],
      // definitions: [
      //   {
      //     id: 4,
      //     date: '12/16',
      //     term: 'Console.log it',
      //     description: '',
      //     thumbsUp: 0,
      //     thumbsDown: 0,
      //     termURL: 'console-log-it',
      //   },
      // ],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    this.handleExampleChange = this.handleExampleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleDefinitionChange(e) {
    console.log(e.target.height);
    e.target.style.height = `${e.target.scrollHeight}px`;
    this.setState({
      formDefinition: e.target.value,
    });
  }

  handleExampleChange(e, idx) {
    console.log(e.target.height);
    e.target.style.height = `${e.target.scrollHeight}px`;
    const updateForm = this.state.formExamples;
    updateForm[idx] = e.target.value;
    this.setState({
      formExamples: updateForm,
    });
  }

  render() {
    const { definitions } = this.state;
    return (
      <section className={this.props.className}>
        <UserDefinitions>
          <DefinitionHeader>
            <span>Phrase</span>
            <span>{definitions[0].term}</span>
          </DefinitionHeader>
          {!definitions[0].description ? (
            <EmptyStateText>
              There are no existing definitions for this phrase. But a user has
              requested it. Help them out by submitting your own definition in
              the right hand side’s submission form!
            </EmptyStateText>
          ) : (
            definitions.map(definition => {
              return (
                <Definition
                  key={definition.id}
                  margins={{
                    top: `30px`,
                  }}>
                  <DefinitionTermLg>{definition.description}</DefinitionTermLg>
                  {definition.examples && definition.examples.length > 0 ? (
                    <DefinitionExamples>
                      {definition.examples.map((example, idx) => (
                        <DefinitionExample
                          key={idx}
                          counter={idx < 10 ? `0${idx + 1}` : idx + 1}>
                          {example}
                        </DefinitionExample>
                      ))}
                    </DefinitionExamples>
                  ) : null}
                  <DefinitionFooter
                    hasDate={definition.date}
                    user={definition.user}
                    thumbsUp={definition.thumbsUp}
                    thumbsDown={definition.thumbsDown}
                    comments={definition.comments}
                    hasComments={
                      definition.comments && definition.comments.length > 0
                    }
                  />
                </Definition>
              );
            })
          )}
        </UserDefinitions>
        <DefinitionForm>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <FormLegend>Add your own definition</FormLegend>
              <p>
                <FormLabel htmlFor="definitionForm">Define the term*</FormLabel>
                <FormInput
                  id="definitionForm"
                  value={this.state.formDefinition}
                  onChange={this.handleDefinitionChange}
                />
              </p>
              {this.state.formExamples.map((example, idx) => (
                <p key={idx}>
                  <FormLabel htmlFor={`definitionEx-${idx}`}>
                    Maybe add an example?
                  </FormLabel>
                  <FormInput
                    id={`definitionEx-${idx}`}
                    value={example}
                    onChange={e => {
                      this.handleExampleChange(e, idx);
                    }}
                  />
                </p>
              ))}
              <SubmitBtn type="submit" value={'Submit'} />
            </fieldset>
          </form>
        </DefinitionForm>
      </section>
    );
  }
}

export default Defintion;
