import Link from 'next/link';
import notifications from '../../data/notifications.json';
import { Bell, Info, AlertCircle, CheckCircle } from 'lucide-react';

export default function NotificationsPage() {
  // Sort notifications by date (newest first)
  // Assuming date format matches something parseable or we just reverse if they come in order
  const sortedNotifications = [...notifications].reverse();

  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'alert':
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return <Info className="w-5 h-5 text-[#2E5B8D]" />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-white pb-20">
      <header className="bg-white py-4 px-4 fixed top-0 left-0 right-0 z-50 shadow-sm flex items-center gap-3">
        <Link href="/" className="text-[#2E5B8D]">
          ← Back
        </Link>
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Bell className="w-5 h-5" />
          Notifications
        </h1>
      </header>

      <main className="p-4 space-y-4 pt-24">
        {sortedNotifications.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No new notifications</p>
          </div>
        ) : (
          sortedNotifications.map((note: any, index: number) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 relative overflow-hidden"
            >
              <div className="flex gap-3 items-start">
                <div className="mt-1 flex-shrink-0">
                  {getIcon(note.type)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-900">{note.title}</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-2 bg-gray-50 px-2 py-1 rounded">
                      {note.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
                    {note.message}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}
