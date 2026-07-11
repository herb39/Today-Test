interface ChoiceButtonProps {
  label: string
  selected: boolean
  onClick: () => void
}

export function ChoiceButton({ label, selected, onClick }: ChoiceButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`w-full rounded-2xl border-2 px-4 py-4 text-left text-base font-medium transition active:scale-[0.99] ${
        selected
          ? 'border-violet-500 bg-violet-50 text-violet-700'
          : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
      }`}
    >
      {label}
    </button>
  )
}
