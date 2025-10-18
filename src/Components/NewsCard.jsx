import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, details, thumbnail_url, tags } =
    news;

  return (
    <div className="rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white p-2 cursor-pointer">
      {/* Header */}
      <div className="flex justify-between items-center mb-3 bg-base-200 p-3 rounded-t-xl">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{author?.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-blue-500" />
          <FaShareAlt className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-56 object-cover rounded-lg mb-3"
      />

      {/* Details */}
      <p className="text-gray-700 text-sm leading-relaxed mb-2">
        {details.slice(0, 200)}...
      </p>

      {/* Tags */}
      <div className="mb-3">
        {tags?.map((tag, i) => (
          <span
            key={i}
            className="text-xs font-semibold text-gray-600 rounded-full mr-2 bg-base-200 px-1"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-base-300 pt-3">
        <div className="flex items-center text-orange-500">
          {Array.from({ length: rating.number }).map((_, i) => (
            <FaStar key={i} className="mr-1" />
          ))}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <FaEye className="mr-1" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
