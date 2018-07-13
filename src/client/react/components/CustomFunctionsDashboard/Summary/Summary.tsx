import * as React from 'react';
import styled from 'styled-components';
import PivotContentContainer from '../PivotContentContainer';
import DetailsItem from './DetailsItem';

const TopInfo = styled.div`
  padding: 27px 24px 0px 17px;
`;

const ErrorContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  flex-shrink: 2;
  border-top: 1px solid #f4f4f4;
`;

const Summary = ({ metadata }: { metadata: ICFVisualMetadata }) => {
  let itemsTest: { error: any; skipped: any[]; success: any[] } = {
    error: {
      content: [], // TODO: find some way to establish what content contains
    },
    skipped: [],
    success: [],
  };

  metadata.snippets.forEach(snippet => {
    snippet.functions.forEach(func => {
      const scriptLabToplevelNamespace = 'ScriptLab';
      const name = `=${scriptLabToplevelNamespace}.${snippet.name}.${func.name}(${
        func.parameters.length > 0 ? '…' : ''
      })`;
      const functionName = func.name;
      const paramErrorMessages = [];
      func.parameters.forEach(param => {
        if (param.error !== undefined) {
          paramErrorMessages.push(`${param.name}: ${param.error}`);
        }
      });
      if (snippet.error) {
        if (func.error) {
          itemsTest.error.content.push({
            name: name,
            children: {
              funcName: functionName,
              paramErrors: paramErrorMessages,
            },
          });
        } else {
          itemsTest.skipped.push({ content: name });
        }
      } else {
        itemsTest.success.push({ content: name });
      }
    });
  });

  // ERROR ITEMS
  const errorItemsContainerTest = [];
  itemsTest.error.content.forEach(item => {
    const errorItem = [
      <DetailsItem
        content={item.name}
        fontFamily="ms-font-m"
        statusIcon="ErrorBadge"
        statusIconColor="#f04251"
      />,
      <DetailsItem
        content={item.children.funcName}
        fontFamily="ms-font-s"
        statusIcon="ErrorBadge"
        statusIconColor="#f04251"
        indent="15px"
      />,
    ];
    item.children.paramErrors.forEach(paramErrorMessage => {
      const paramError = (
        <DetailsItem
          content={paramErrorMessage}
          fontFamily="ms-font-s"
          indent="30px"
          noDropdown={true}
        />
      );
      errorItem.push(paramError);
    });
    errorItemsContainerTest.push(errorItem);
  });

  // SKIPPED ITEMS
  const skippedItemsContainerTest = [];
  itemsTest.skipped.forEach(item => {
    const skippedItem = (
      <DetailsItem
        content={item.content}
        fontFamily="ms-font-m"
        statusIcon="Warning"
        statusIconColor="#F0C784"
      />
    );
    skippedItemsContainerTest.push(skippedItem);
  });

  // SUCCESS ITEMS
  const successItemsContainerTest = [];
  itemsTest.success.forEach(item => {
    const successItem = (
      <DetailsItem
        content={item.content}
        fontFamily="ms-font-m"
        statusIcon="Completed"
        statusIconColor="#107C10"
        noDropdown={true}
        indent="20px"
      />
    );
    successItemsContainerTest.push(successItem);
  });

  return (
    <PivotContentContainer>
      <TopInfo>
        <h1 className="ms-font-xl" style={{ lineHeight: '28px' }}>
          Custom Functions (Preview)
        </h1>
        <p
          className="ms-font-m"
          style={{
            lineHeight: '16.8px',
            marginBottom: '26px',
            marginTop: '10px',
          }}
        >
          The following functions are invalid and cannot be declared. Review and fix the
          issue.
        </p>
      </TopInfo>
      <ErrorContainer style={{ marginTop: '20px' }}>
        {errorItemsContainerTest}
        {skippedItemsContainerTest}
      </ErrorContainer>
      <DetailsItem fontFamily={'ms-font-l'} content={'Registered Custom Functions'} />
      {successItemsContainerTest}
    </PivotContentContainer>
  );
};

export default Summary;
