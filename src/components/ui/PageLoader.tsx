'use client';

import { useEffect, useState } from 'react';
import styles from './PageLoader.module.css';

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 600);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.loader} ${isExiting ? styles.exit : ''}`}>
      <div className={styles.logoContainer}>
        <svg className={styles.logoSvg} viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="loaderGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e8c866"/>
              <stop offset="50%" stopColor="#c9a84c"/>
              <stop offset="100%" stopColor="#9a7830"/>
            </linearGradient>
            <linearGradient id="loaderNeonBlue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4facfe"/>
              <stop offset="100%" stopColor="#00f2fe"/>
            </linearGradient>
            <linearGradient id="loaderNeonPurple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7"/>
              <stop offset="100%" stopColor="#ec4899"/>
            </linearGradient>
            <filter id="loaderGlow">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="loaderNeonGlow">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <circle className={styles.glowRing} cx="90" cy="90" r="80" fill="none" stroke="url(#loaderGold)" strokeWidth="0.5" opacity="0.2"/>

          <g stroke="url(#loaderNeonBlue)" strokeWidth="1" opacity="0.6" className={styles.neuralLine}>
            <line x1="45" y1="60" x2="75" y2="80"/>
            <line x1="35" y1="90" x2="70" y2="90"/>
            <line x1="45" y1="120" x2="75" y2="100"/>
          </g>

          <g stroke="url(#loaderNeonPurple)" strokeWidth="1" opacity="0.6" className={styles.neuralLine}>
            <line x1="135" y1="60" x2="105" y2="80"/>
            <line x1="145" y1="90" x2="110" y2="90"/>
            <line x1="135" y1="120" x2="105" y2="100"/>
          </g>

          <g className={styles.infinityRing} filter="url(#loaderGlow)">
            <path d="M90 35 C120 35, 145 55, 145 90 C145 125, 120 145, 90 145 C60 145, 35 125, 35 90 C35 55, 60 35, 90 35Z" 
              fill="none" stroke="url(#loaderGold)" strokeWidth="2"/>
          </g>

          <circle cx="90" cy="90" r="50" fill="none" stroke="url(#loaderGold)" strokeWidth="1" opacity="0.5" strokeDasharray="3 6" className={styles.decisionRing}/>

          <g className={styles.arrowFlow} filter="url(#loaderGlow)">
            <path d="M130 70 L145 90 L130 110" fill="none" stroke="url(#loaderGold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="120" y1="90" x2="142" y2="90" stroke="url(#loaderGold)" strokeWidth="2" strokeLinecap="round"/>
            <path d="M140 75 L155 90 L140 105" fill="none" stroke="url(#loaderGold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
          </g>

          <g filter="url(#loaderNeonGlow)">
            <circle className={styles.decisionNode} cx="45" cy="60" r="4" fill="#4facfe"/>
            <circle className={styles.decisionNode} cx="35" cy="90" r="3" fill="#00f2fe"/>
            <circle className={styles.decisionNode} cx="45" cy="120" r="4" fill="#4facfe"/>
            <circle className={styles.decisionNode} cx="135" cy="60" r="4" fill="#a855f7"/>
            <circle className={styles.decisionNode} cx="145" cy="90" r="3" fill="#ec4899"/>
            <circle className={styles.decisionNode} cx="135" cy="120" r="4" fill="#a855f7"/>
          </g>

          <g filter="url(#loaderGlow)">
            <circle cx="90" cy="35" r="5" fill="url(#loaderGold)" className={styles.coreNode}/>
            <circle cx="145" cy="90" r="5" fill="url(#loaderGold)" className={styles.coreNode}/>
            <circle cx="90" cy="145" r="5" fill="url(#loaderGold)" className={styles.coreNode}/>
            <circle cx="35" cy="90" r="5" fill="url(#loaderGold)" className={styles.coreNode}/>
          </g>

          <g filter="url(#loaderNeonGlow)">
            <circle cx="90" cy="90" r="25" fill="none" stroke="url(#loaderGold)" strokeWidth="1.5"/>
            <path d="M90 72 L106 81 L106 99 L90 108 L74 99 L74 81 Z" fill="url(#loaderGold)" opacity="0.9"/>
            <text x="90" y="97" textAnchor="middle" fill="#08080f" fontFamily="Outfit, sans-serif" fontSize="16" fontWeight="700">T</text>
            <circle cx="90" cy="90" r="8" fill="url(#loaderNeonBlue)" filter="url(#loaderNeonGlow)"/>
            <circle cx="90" cy="90" r="4" fill="#fff"/>
          </g>

          <g fill="#c9a84c" filter="url(#loaderGlow)">
            <circle cx="90" cy="20" r="2" opacity="0.8" className={styles.spark}/>
            <circle cx="160" cy="90" r="2" opacity="0.6" className={styles.spark}/>
            <circle cx="90" cy="160" r="2" opacity="0.8" className={styles.spark}/>
            <circle cx="20" cy="90" r="2" opacity="0.6" className={styles.spark}/>
          </g>

          <g stroke="url(#loaderGold)" strokeWidth="1" fill="none" opacity="0.4">
            <path d="M50 75 Q60 80, 70 85"/>
            <path d="M130 75 Q120 80, 110 85"/>
            <path d="M50 105 Q60 100, 70 95"/>
            <path d="M130 105 Q120 100, 110 95"/>
          </g>
        </svg>

        <div className={styles.wordmark}>
          <span className={styles.brandName}>TEMAHUX</span>
          <span className={styles.tagline}>ज्ञान · प्रविधि · सेवा</span>
        </div>
      </div>
    </div>
  );
}
