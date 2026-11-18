// Column titles for the task ledger; hidden on narrow screens where rows restack.
export default function LedgerHead() {
  return (
    <div className="ledger-head" aria-hidden="true">
      <span>Task</span>
      <span>Due</span>
      <span>Priority</span>
    </div>
  )
}