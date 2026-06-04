// components/creator/ReferralLinkBox.tsx
"use client";
import { useState } from "react";

interface Props {
  url: string;
  promoCode?: string;
  discountPct?: number;
  commissionPct: number;
}

const CHANNELS = [
  { label: "WhatsApp", icon: "💬" },
  { label: "Instagram", icon: "📸" },
  { label: "TikTok", icon: "🎵" },
  { label: "Facebook", icon: "👥" },
];

export default function ReferralLinkBox({
  url,
  promoCode,
  discountPct = 0,
  commissionPct,
}: Props) {
  const [copied, setCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  function copy(text: string, setter: (v: boolean) => void) {
    navigator.clipboard.writeText(text).then(() => {
      setter(true);
      setTimeout(() => setter(false), 2000);
    });
  }

  return (
    <div className="space-y-3">
      {/* URL */}
      <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5">
        <span className="text-xs text-gray-500 font-mono truncate flex-1">
          {url}
        </span>
        <button
          onClick={() => copy(url, setCopied)}
          className="text-xs px-2.5 py-1 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 flex-shrink-0"
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>

      {/* Share channels */}
      <div className="flex gap-2 flex-wrap">
        {CHANNELS.map((ch) => (
          <button
            key={ch.label}
            className="text-xs px-2.5 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center gap-1.5"
          >
            <span>{ch.icon}</span>
            {ch.label}
          </button>
        ))}
      </div>

      {/* Promo code */}
      {promoCode && (
        <div className="flex items-center gap-3 bg-purple-50 border border-purple-200 rounded-xl px-3 py-2.5">
          <div className="flex-1">
            <div className="font-mono text-base font-medium text-purple-800">
              {promoCode}
            </div>
            <div className="text-[10px] text-purple-600 mt-0.5">
              {discountPct > 0 && `${discountPct}% off for customer · `}
              {commissionPct}% commission for you
            </div>
          </div>
          <button
            onClick={() => copy(promoCode, setCodeCopied)}
            className="text-xs px-2.5 py-1 rounded-lg border border-purple-200 bg-white text-purple-700 hover:bg-purple-50 flex-shrink-0"
          >
            {codeCopied ? "✓ Copied" : "Copy"}
          </button>
        </div>
      )}

      {/* Commission reminder */}
      <div className="flex items-center gap-3 bg-ziarra-50 border border-ziarra-100 rounded-xl px-3 py-2.5">
        <span className="text-2xl font-medium text-ziarra-800">
          {commissionPct}%
        </span>
        <div>
          <div className="text-xs font-medium text-ziarra-700">
            per confirmed booking
          </div>
          <div className="text-[10px] text-ziarra-600">
            Auto-credited within 48hrs of payment
          </div>
        </div>
      </div>
    </div>
  );
}
