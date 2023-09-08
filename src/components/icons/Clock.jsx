export default function IconClock({width, title}) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17v-5l-2.5-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        <title>{title || 'clock'}</title>
      </svg>
    );
}
