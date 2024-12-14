import type { SongData } from '../types';

export function pickRandomSong(
  userFortune: string,
  songs: SongData[]
): SongData | null {
  // 필터링된 곡들: 유저가 선택한 운이 포함된 곡만 추출
  const filteredSongs = songs.filter(
    (song) =>
      song.firstFortune === userFortune || song.secondFortune === userFortune
  );

  if (filteredSongs.length === 0) {
    return null; // 관련 곡이 없을 경우 null 반환
  }

  // 가중치 기반 배열 생성
  const weightedSongs: SongData[] = [];
  filteredSongs.forEach((song) => {
    if (song.firstFortune === userFortune) {
      weightedSongs.push(...Array(7).fill(song)); // firstFortune은 70%
    }
    if (song.secondFortune === userFortune) {
      weightedSongs.push(...Array(3).fill(song)); // secondFortune은 30%
    }
  });

  // 랜덤으로 곡 선택
  const randomIndex = Math.floor(Math.random() * weightedSongs.length);
  return weightedSongs[randomIndex];
}

export function getYoutubeEmbedUrl(url: string) {
  let videoId;
  if (url.includes('youtu.be')) {
    videoId = url.split('youtu.be/')[1];
  } else {
    videoId = url.split('v=')[1];
  }
  return `https://www.youtube.com/embed/${videoId}`;
}
