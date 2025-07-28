"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Project } from "@/types";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface ProjectCardProps {
  project: Project;
}

const StatusBadge = ({ status }: { status?: Project["status"] }) => {
  if (!status) return null;

  const statusConfig = {
    active: { label: "진행중", className: "bg-green-500" },
    maintenance: { label: "유지보수", className: "bg-blue-500" },
    completed: { label: "완료", className: "bg-gray-500" },
  };

  const config = statusConfig[status];

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium text-white rounded-full ml-3 ${config.className}`}
    >
      {config.label}
    </span>
  );
};

// 🎬 미디어 타입 확인 함수
const getMediaType = (url: string): "image" | "video" => {
  const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi"];
  const extension = url.toLowerCase().substring(url.lastIndexOf("."));
  return videoExtensions.includes(extension) ? "video" : "image";
};

// 🎥 비디오 컨트롤 컴포넌트
const VideoControls = ({
  isPlaying,
  isMuted,
  onPlayPause,
  onMuteToggle,
  duration,
  currentTime,
  onSeek,
}: {
  isPlaying: boolean;
  isMuted: boolean;
  onPlayPause: () => void;
  onMuteToggle: () => void;
  duration: number;
  currentTime: number;
  onSeek: (time: number) => void;
}) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
      {/* 프로그레스 바 */}
      <div className="mb-3">
        <div
          className="w-full h-1 bg-white/30 rounded-full cursor-pointer"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            onSeek(percent * duration);
          }}
        >
          <div
            className="h-full bg-white rounded-full transition-all duration-100"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
      </div>

      {/* 컨트롤 버튼들 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={onPlayPause}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label={isPlaying ? "일시정지" : "재생"}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>

          <button
            onClick={onMuteToggle}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label={isMuted ? "음소거 해제" : "음소거"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>

          <span className="text-white text-sm">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
};

// 🎠 미디어 캐러셀 컴포넌트 (이미지 + 비디오)
const MediaCarousel = ({
  media,
  projectTitle,
}: {
  media: string[];
  projectTitle: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // 기본적으로 음소거
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentMedia = media[currentIndex];
  const mediaType = getMediaType(currentMedia);

  // 비디오 시간 업데이트
  useEffect(() => {
    const video = videoRef.current;
    if (!video || mediaType !== "video") return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, [currentIndex, mediaType]);

  // 컨트롤 자동 숨김
  useEffect(() => {
    if (mediaType !== "video") return;

    const resetTimer = () => {
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = setTimeout(() => {
        if (isPlaying) setShowControls(false);
      }, 3000);
    };

    resetTimer();
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying, mediaType]);

  const nextMedia = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    setIsPlaying(false);
  };

  const prevMedia = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + media.length) % media.length
    );
    setIsPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (time: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = time;
    setCurrentTime(time);
  };

  if (!media || media.length === 0) return null;

  return (
    <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden">
      {/* 메인 미디어 컨테이너 */}
      <div className="relative w-full h-64 md:h-80">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {mediaType === "video" ? (
              <div
                className="relative w-full h-full"
                onMouseMove={() => setShowControls(true)}
                onMouseLeave={() => isPlaying && setShowControls(false)}
              >
                <video
                  ref={videoRef}
                  src={currentMedia}
                  className="w-full h-full object-contain"
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                  onLoadStart={() => {
                    setCurrentTime(0);
                    setIsPlaying(false);
                  }}
                />

                {/* 비디오 오버레이 (클릭으로 재생/일시정지) */}
                <div
                  className="absolute inset-0 cursor-pointer"
                  onClick={handlePlayPause}
                />

                {/* 가운데 재생 버튼 (비디오 정지 시) */}
                {!isPlaying && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    onClick={handlePlayPause}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </motion.button>
                )}

                {/* 비디오 컨트롤 */}
                <AnimatePresence>
                  {showControls && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <VideoControls
                        isPlaying={isPlaying}
                        isMuted={isMuted}
                        onPlayPause={handlePlayPause}
                        onMuteToggle={handleMuteToggle}
                        duration={duration}
                        currentTime={currentTime}
                        onSeek={handleSeek}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Image
                src={currentMedia}
                alt={`${projectTitle} - 이미지 ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* 이전/다음 버튼 (미디어가 2개 이상일 때만) */}
        {media.length > 1 && (
          <>
            <button
              onClick={prevMedia}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm z-10"
              aria-label="이전 미디어"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextMedia}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm z-10"
              aria-label="다음 미디어"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* 미디어 인디케이터 */}
        {media.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`미디어 ${index + 1}로 이동`}
              />
            ))}
          </div>
        )}

        {/* 미디어 카운터 & 타입 */}
        {media.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm z-10">
            <span className="mr-2">{mediaType === "video" ? "🎥" : "🖼️"}</span>
            {currentIndex + 1} / {media.length}
          </div>
        )}
      </div>

      {/* 썸네일 네비게이션 (미디어가 3개 이상일 때) */}
      {media.length > 2 && (
        <div className="p-4">
          <div className="flex space-x-2 overflow-x-auto">
            {media.map((mediaUrl, index) => {
              const thumbType = getMediaType(mediaUrl);
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all duration-200 ${
                    index === currentIndex
                      ? "border-indigo-500 scale-105"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {thumbType === "video" ? (
                    <div className="relative w-full h-full bg-gray-800 flex items-center justify-center">
                      <Play className="w-4 h-4 text-white" />
                      <video
                        src={mediaUrl}
                        className="absolute inset-0 w-full h-full object-cover opacity-70"
                        muted
                      />
                    </div>
                  ) : (
                    <Image
                      src={mediaUrl}
                      alt={`썸네일 ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-indigo-100 flex items-center">
              {project.period}
              <StatusBadge status={project.status} />
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-600 mb-2">
            <strong>담당 업무:</strong>
          </p>
          <p className="text-gray-800">{project.role}</p>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* 🎬 미디어 캐러셀 섹션 (이미지 + 비디오) */}
        {project.images && project.images.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              프로젝트 결과물
            </h4>
            <MediaCarousel
              media={project.images}
              projectTitle={project.title}
            />
          </div>
        )}

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-indigo-600 mb-3">
            {project.achievements.title}
          </h4>
          <ul className="space-y-2">
            {project.achievements.items.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-indigo-500 font-bold mt-1">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            기술 스택
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow"
            >
              <span>{link.label}</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
