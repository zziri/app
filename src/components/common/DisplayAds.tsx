import React, { useEffect } from 'react';
import { styled } from 'styled-components';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

interface Props {
  height?: string;
}

const FakeAdsContainer = styled.div<{ height: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height};
  width: 100%;
  background-color: #f2f2f2;
`;

const DisplayAds = ({ height = '6.25rem'}: Props) => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <FakeAdsContainer height={height}>
        <div>여기에 광고가 표시됩니다.</div>
      </FakeAdsContainer>
    );
  }

  useEffect(() => {
    const pushAd = () => {
      try {
        const adsbygoogle = window.adsbygoogle
        // console.log({ adsbygoogle })
        adsbygoogle.push({})
      } catch (e) {
        console.error(e)
      }
    }

    let interval = setInterval(() => {
      // Check if Adsense script is loaded every 300ms
      if (window.adsbygoogle) {
        pushAd()
        // clear the interval once the ad is pushed so that function isn't called indefinitely
        clearInterval(interval)
      }
    }, 300)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div>
      <ins
        className='adsbygoogle'
        style={{ display: 'block', height }}
        data-ad-client='ca-pub-4184579550762583'
        data-ad-slot='9719302914'
        data-ad-format='horizontal'
        data-full-width-responsive='false'
      ></ins>
    </div>
  )
}

export default DisplayAds;
