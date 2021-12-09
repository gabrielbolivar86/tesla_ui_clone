import React from 'react';

import { ModelsWrapper, ModelSection} from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model one',
            'Model two',
            'Model three',
            'Model four',
            'Model five',
            'Model six',
            'Model seven',
            'Model eight',
            'Model Nine'
          ].map(modelName => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>
        <UniqueOverlay/>
      </ModelsWrapper>
    </Container>
  )
}

export default Page